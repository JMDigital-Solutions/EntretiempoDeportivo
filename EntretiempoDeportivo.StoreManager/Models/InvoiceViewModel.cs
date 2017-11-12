using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using System.Collections.Generic;

namespace EntretiempoDeportivo.StoreManager.Models
{
    public class InvoiceViewModel
    {

        public int Id { get; set; }        
        public PaymentMethod PaymentMethod { get; set; }
        public double Total { get; set; }
        public IList<InvoiceProductViewModel> Products { get; set; }

        public InvoiceViewModel()
        {
            Products = new List<InvoiceProductViewModel>();
            GetTotalAmount();
        }

        public InvoiceViewModel(int id, PaymentMethod paymentMethod, double total)
        {
            Id = id;
            PaymentMethod = paymentMethod;
            Total = total;
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
