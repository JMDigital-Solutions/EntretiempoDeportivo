using Microsoft.AspNetCore.Mvc;

namespace EntretiempoDeportivo.StoreManager.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult ProductManagment()
        {
            return View();
        }

        public IActionResult Reports()
        {
            return View();
        }
    }
}