using EntretiempoDeportivo.StoreManager.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.ViewComponents
{
    public class FinalInvoice : ViewComponent
    {
        private InvoiceViewModel _invoiceProducts;

        public InvoiceViewModel InvoiceProducts
        {
            get { return _invoiceProducts; }
        }

        public FinalInvoice()
        {
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
                _invoiceProducts = new InvoiceViewModel();
                return View(InvoiceProducts);
            }            
        }
    }
}
