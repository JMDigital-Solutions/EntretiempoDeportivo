using System.Collections.Generic;

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
