using EntretiempoDeportivo.StoreManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.ViewComponents
{
    public class InvoiceProductList : ViewComponent
    {
        private InvoiceViewModel _invoiceProducts;
        private IMemoryCache _memCache;

        public InvoiceViewModel InvoiceProducts
        {
            get { return _invoiceProducts; }
        }

        public InvoiceProductList(IMemoryCache memCache)
        {
            _memCache = memCache;
        }

        public async Task<IViewComponentResult> InvokeAsync(InvoiceViewModel invoice)
        {
            if(invoice != null)
            {
                await Task.Run(() =>
                {
                    _invoiceProducts = invoice;
                });

                return View(InvoiceProducts);
            }
            else
            {
                _invoiceProducts = new InvoiceViewModel(this._memCache);
                return View(InvoiceProducts);
            }            
        }
    }
}
