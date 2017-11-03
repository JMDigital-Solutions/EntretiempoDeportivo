using EntretiempoDeportivo.CrossCuttingLayer.Enums;
using EntretiempoDeportivo.StoreManager.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntretiempoDeportivo.StoreManager.ViewComponents
{
    public class ProductList : ViewComponent
    {
        public ProductList()
        {

        }

        public async Task<IViewComponentResult> InvokeAsync(IList<ProductViewModel> products, bool emptyList = true)
        {
            IList<ProductViewModel> productList = new List<ProductViewModel>();

            if(products == null && !emptyList)
                productList = await FindProductsAsync();
            
            if(products != null && emptyList)
                productList = await FindProductsAsync(products);

            return View(productList);
        }

        private async Task<IList<ProductViewModel>> FindProductsAsync()
        {
            List<ProductViewModel> productList = new List<ProductViewModel>();

            await Task.Run(() =>
            {
                productList.Add(new ProductViewModel { Name = "Zapatillas Nike Negras", Type = ProductType.Zapatillas, Gender = GenderType.Femenino, AvailableStock = 4, Size = "35", UnitPrice = 300.5 });
                productList.Add(new ProductViewModel { Name = "Camiseta Douglas Haig Para niños", Type = ProductType.Remera, Gender = GenderType.Masculino, AvailableStock = 6, Size = "M", UnitPrice = 150 });
                productList.Add(new ProductViewModel { Name = "Camiseta Douglas Haig Para Adultos", Type = ProductType.Remera, Gender = GenderType.Masculino, AvailableStock = 1, Size = "L", UnitPrice = 150.5 });
                productList.Add(new ProductViewModel { Name = "Calzas negras", Type = ProductType.Calza, Gender = GenderType.Femenino, AvailableStock = 2, Size = "S", UnitPrice = 200 });
                productList.Add(new ProductViewModel { Name = "Musculosa Reef", Type = ProductType.Musculosa, Gender = GenderType.Femenino, AvailableStock = 5, Size = "S", UnitPrice = 250.5 });
                productList.Add(new ProductViewModel { Name = "Remera mangas largas para niño", Type = ProductType.Remera, Gender = GenderType.Masculino, AvailableStock = 4, Size = "S", UnitPrice = 120 });
                productList.Add(new ProductViewModel { Name = "Mochila", Type = ProductType.Otro, Gender = GenderType.Ambos, AvailableStock = 2, Size = String.Empty, UnitPrice = 300.5 });
                productList.Add(new ProductViewModel { Name = "Short de baño reef", Type = ProductType.Short, Gender = GenderType.Masculino, AvailableStock = 4, Size = "L", UnitPrice = 250 });
             });

            return productList;
        }

        private async Task<IList<ProductViewModel>> FindProductsAsync(IList<ProductViewModel> products)
        {
            IList<ProductViewModel> productList = new List<ProductViewModel>(); 

            await Task.Run(() =>
            {
                productList = products;
            });

            return productList;
        }
    }
}
