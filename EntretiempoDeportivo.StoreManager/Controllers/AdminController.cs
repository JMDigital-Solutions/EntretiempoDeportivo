using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EntretiempoDeportivo.StoreManager.Models;
using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using EntretiempoDeportivo.StoreManager.ViewComponents;

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