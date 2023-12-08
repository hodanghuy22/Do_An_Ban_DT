using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly CSDLContext _context;

        public ProductRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task CreateProduct(Product product)
        {
            await _context.Products.AddAsync(product);
        }

        public async Task DeleteProduct(int id)
        {
            var pt = await GetProduct(id);

            pt.Status = false;
        }

        public async Task<Product> GetProduct(int id)
        {
            return await _context.Products.Include(p => p.Phone)
                .Include(p => p.Capacity)
                .Include(p => p.Color)
                .Include(p => p.Images)
                .Include(p => p.Comments)
                .Include(p => p.Ratings)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await _context.Products.Include(p => p.Phone)
                .Include(p => p.Capacity)
                .Include(p => p.Color)
                .Include(p => p.Images)
                .Include(p => p.Comments)
                .Include(p => p.Ratings)
                .ToListAsync();
        }

        public async Task<bool> ProductExist(int id)
        {
            return await _context.Products.AnyAsync(b => b.Id == id);
        }

        public async Task<IActionResult> UpdateProduct(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!await ProductExist(product.Id))
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
