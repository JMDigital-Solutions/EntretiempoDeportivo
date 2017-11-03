using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.Models
{
    public class NavbarViewModel
    {
        public IList<NavbarItemViewModel> NavbarLinks { get; set; }

        public NavbarViewModel(IList<NavbarItemViewModel> navbarLinks)
        {
            NavbarLinks = navbarLinks;
        }
    }
}
