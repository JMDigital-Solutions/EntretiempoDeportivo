using EntretiempoDeportivo.CrossCuttingLayer.Constants;
using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.Models
{
    public class InvoiceViewModel
    {
        private IMemoryCache _memCache;

        public int Id { get; set; }        
        public PaymentMethod PaymentMethod { get; set; }
        public double Total { get; set; }

        private IList<InvoiceProductViewModel> _products;

        public IList<InvoiceProductViewModel> Products
        {
            get
            {
                if (!_memCache.TryGetValue(CacheKeys.InvoiceProductList, out _products))
                {
                    _products = new List<InvoiceProductViewModel>();

                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(5));

                    _memCache.Set(CacheKeys.InvoiceProductList, _products, cacheEntryOptions);
                }

                return _products;
            }
            set
            {
                if (value != null)
                    _products = value;
            }
        }

        public InvoiceViewModel(IMemoryCache memCache)
        {
            _memCache = memCache;
            GetTotalAmount();
        }

        #region Public Methods

        public void AddProducts(InvoiceProductViewModel product)
        {
            if (product != null)
            {
                Products.Add(product);
                GetTotalAmount();
            }
        }

        public void Clear()
        {
            Id = 0;
            PaymentMethod = 0;
            Total = 0;
            Products.Clear();
            _memCache.Remove(CacheKeys.InvoiceProductList);
        }

        #endregion

        #region Private Methods

        private void GetTotalAmount()
        {
            foreach (var product in Products)
                Total += (product.UnitPrice * product.Quantity);
        }

        #endregion
    }
}
