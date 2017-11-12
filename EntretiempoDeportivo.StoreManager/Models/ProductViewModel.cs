using EntretiempoDeportivo.CrossCuttingLayer.Enums;

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
