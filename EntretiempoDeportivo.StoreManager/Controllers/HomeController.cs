using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using EntretiempoDeportivo.StoreManager.Models;
using EntretiempoDeportivo.StoreManager.ViewComponents;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using System;
using EntretiempoDeportivo.CrossCuttingLayer.Constants;

namespace EntretiempoDeportivo.StoreManager.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMemoryCache _memoryCache;

        private InvoiceViewModel _invoice;

        public InvoiceViewModel Invoice
        {
            get {
                if (!_memoryCache.TryGetValue(CacheKeys.InvoiceProductList, out _invoice))
                {
                    _invoice = new InvoiceViewModel();

                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(5));

                    _memoryCache.Set(CacheKeys.InvoiceProductList, _invoice, cacheEntryOptions);
                }

                return _invoice;
            }
            set {
                if (value != null)
                    _invoice = value;
            }
        }


        public HomeController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public IActionResult Sell()
        {
            return View(Invoice);
        }

        [HttpPost]
        public IActionResult AddProductToSale([FromForm]InvoiceProductViewModel product)
        {
            var productId = 0;
            if (Invoice.Products.Count > 0)
                productId = Invoice.Products.Max(p => p.Id) + 1;

            product.Id = productId;
            Invoice.AddProducts(product);

            return ViewComponent(nameof(FinalInvoice), new { invoice = Invoice });
        }

        [HttpPost]
        public IActionResult ConfirmSale([FromForm]InvoiceViewModel invoice)
        {
            _memoryCache.Remove(CacheKeys.InvoiceProductList);
            Invoice.Products.Clear();
            return RedirectToAction(nameof(Sell));
        }

        [HttpDelete]
        public IActionResult RemoveProductFromSale(int productId)
        {
            var product = Invoice.Products.Where(p => p.Id == Convert.ToInt32(productId)).FirstOrDefault();

            if(product != null)
                Invoice.Products.Remove(product);

            return ViewComponent(nameof(FinalInvoice), new { invoice = Invoice });
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
