using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ProductType Type { get; set; }
        public GenderType Gender { get; set; }
        public string Size { get; set; }
        public double UnitPrice { get; set; }
        public int AvailableStock { get; set; }
    }
}
