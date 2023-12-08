using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class BrandRepository : IBrandRepository
    {
        private readonly CSDLContext _context;

        public BrandRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task<bool> BrandExist(int id)
        {
            return await _context.Brands.AnyAsync(b => b.Id == id);
        }

        public async Task CreateBrand(Brand brand)
        {
            await _context.Brands.AddAsync(brand);
        }

        public async Task DeleteBrand(int id)
        {
            var pt = await GetBrand(id);

            pt.Status = false;
        }

        public async Task<Brand> GetBrand(int id)
        {
            return await _context.Brands.FindAsync(id);
        }

        public async Task<IEnumerable<Brand>> GetBrands()
        {
            return await _context.Brands.ToListAsync();
        }

        public async Task<IActionResult> UpdateBrand(Brand brand)
        {
            _context.Entry(brand).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!await BrandExist(brand.Id))
                {
                    return new NotFoundResult();
                }
                else
                {
                    throw;
                }
            }
            return new OkResult();
        }
    }
}
