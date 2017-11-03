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
        private InvoiceViewModel _saleViewModel;

        public InvoiceViewModel SaleViewModel
        {
            get { return _saleViewModel; }
            set { _saleViewModel = value; }
        }

        public HomeController(IMemoryCache memCache)
        {
            SaleViewModel = new InvoiceViewModel(memCache);
        }

        public IActionResult Sell()
        {
            return View(SaleViewModel);
        }

        [HttpPost]
        public IActionResult AddProductToSale(InvoiceProductViewModel product)
        {
            var productId = 0;
            if (SaleViewModel.Products.Count > 0)
                productId = SaleViewModel.Products.Max(p => p.Id) + 1;

            product.Id = productId;
            SaleViewModel.AddProducts(product);

            return ViewComponent(nameof(InvoiceProductList), new { SaleViewModel });
        }

        [HttpDelete]
        public IActionResult RemoveProductFromSale(int productId)
        {
            var product = SaleViewModel.Products.Where(p => p.Id == Convert.ToInt32(productId)).FirstOrDefault();

            if(product != null)
                SaleViewModel.Products.Remove(product);

            return ViewComponent(nameof(InvoiceProductList), new { SaleViewModel });
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
