using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using EntretiempoDeportivo.StoreManager.Models;
using System.Collections.Generic;
using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using EntretiempoDeportivo.StoreManager.ViewComponents;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using System;

namespace EntretiempoDeportivo.StoreManager.Controllers
{
    public class HomeController : Controller
    {
        private InvoiceViewModel _invoiceViewModel;

        public InvoiceViewModel InvoiceViewModel
        {
            get { return _invoiceViewModel; }
            set { _invoiceViewModel = value; }
        }

        public HomeController(IMemoryCache memCache)
        {
            InvoiceViewModel = new InvoiceViewModel(memCache);
        }

        public IActionResult Sell()
        {
            return View(InvoiceViewModel);
        }

        [HttpPost]
        public IActionResult AddProductToSale(InvoiceProductViewModel product)
        {
            var productId = 0;
            if (InvoiceViewModel.Products.Count > 0)
                productId = InvoiceViewModel.Products.Max(p => p.Id) + 1;

            product.Id = productId;
            InvoiceViewModel.AddProducts(product);

            return ViewComponent(nameof(InvoiceProductList), new { InvoiceViewModel });
        }

        [HttpPost]
        public IActionResult ConfirmSale(double totalSale, PaymentMethod paymentMethod)
        {
            try
            {
                InvoiceViewModel.Clear();
                return ViewComponent(nameof(InvoiceProductList), new { InvoiceViewModel });
            }
            catch
            {
                return RedirectToAction(nameof(Sell));
            }
        }

        [HttpDelete]
        public IActionResult RemoveProductFromSale(int productId)
        {
            var product = InvoiceViewModel.Products.Where(p => p.Id == Convert.ToInt32(productId)).FirstOrDefault();

            if(product != null)
                InvoiceViewModel.Products.Remove(product);

            return ViewComponent(nameof(InvoiceProductList), new { InvoiceViewModel });
        }

        public  IActionResult Refunds()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
