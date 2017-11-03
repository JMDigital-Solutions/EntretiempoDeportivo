using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.Models
{
    public class NavbarItemViewModel
    {
        public string DisplayName { get; set; }
        public string DisplayIcon { get; set; }
        public bool IsActive { get; set; }
        public string Action { get; set; }
        public string Controller { get; set; }
        public NavbarSection Section { get; set; }

        public NavbarItemViewModel()
        {

        }

        public NavbarItemViewModel(string displayName, string displayIcon, string action, string controller, NavbarSection section, bool isActive = false)
        {
            DisplayName = displayName;
            DisplayIcon = displayIcon;
            IsActive = isActive;
            Action = action;
            Controller = controller;
            Section = section;
        }
    }
}
