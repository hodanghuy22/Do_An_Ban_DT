using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IBrandRepository
    {
        Task CreateBrand(Brand brand);
        Task<IEnumerable<Brand>> GetBrands();
        Task<Brand> GetBrand(int id);
        Task<bool> BrandExist(int id);
        Task<IActionResult> UpdateBrand(Brand brand);
        Task DeleteBrand(int id);
    }
}
