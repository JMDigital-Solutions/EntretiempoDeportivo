using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using EntretiempoDeportivo.StoreManager.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.ViewComponents
{
    public class Navbar : ViewComponent
    {
        public Navbar() {}

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var navigationLinks = new List<NavbarItemViewModel>();

            await Task.Run(() =>
            {
                navigationLinks.Add(new NavbarItemViewModel()
                {
                    DisplayName = "Ventas",
                    DisplayIcon = "attach_money",
                    Action = "Sell",
                    Controller = "Home",
                    Section = NavbarSection.Operaciones,
                });

                navigationLinks.Add(new NavbarItemViewModel()
                {
                    DisplayName = "Devoluciones",
                    DisplayIcon = "arrow_back",
                    Action = "Refunds",
                    Controller = "Home",
                    Section = NavbarSection.Operaciones,
                });

                navigationLinks.Add(new NavbarItemViewModel()
                {
                    DisplayName = "Artículos",
                    DisplayIcon = "shopping_cart",
                    Action = "ProductManagment",
                    Controller = "Admin",
                    Section = NavbarSection.Administracion
                });

                navigationLinks.Add(new NavbarItemViewModel()
                {
                    DisplayName = "Informes",
                    Action = "Reports",
                    DisplayIcon = "assignment",
                    Controller = "Admin",
                    Section = NavbarSection.Administracion
                });  
            });

            var navbar = new NavbarViewModel(navigationLinks);
            return View(navbar);
        }
    }
}
