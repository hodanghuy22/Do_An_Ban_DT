using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IProductRepository
    {
        Task CreateProduct(Product product);
        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProduct(int id);
        Task<bool> ProductExist(int id);
        Task<IActionResult> UpdateProduct(Product product);
        Task DeleteProduct(int id);
    }
}
