using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IProductTypeDetailRepository
    {
        Task CreateProductTypeDetail(ProductTypeDetail productTypeDetail);
        Task<IEnumerable<ProductTypeDetail>> GetProductTypeDetails();
        Task<ProductTypeDetail> GetProductTypeDetail(int id);
        Task<bool> ProductTypeDetailExist(int id);
        Task<IActionResult> UpdateProductTypeDetail(ProductTypeDetail productTypeDetail);
        Task DeleteProductTypeDetail(ProductTypeDetail productTypeDetail);
    }
}
