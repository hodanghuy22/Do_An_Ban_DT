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
        public async Task<IActionResult> CreateProduct(Product product)
        {
            var checkExist = await _context.Products
                .FirstOrDefaultAsync(p => 
                p.PhoneId == product.PhoneId && 
                p.CapacityId == product.CapacityId &&
                p.ColorId == product.ColorId);
            if (checkExist != null)
            {
                return new BadRequestObjectResult("Da ton tai!!!");
            }
            await _context.Products.AddAsync(product);
            var getPhone = await _context.Phones.FirstOrDefaultAsync(p => p.Id == product.PhoneId);
            getPhone.SoLuong += product.Quantity;
            if(getPhone.Price < product.Price)
            {
                getPhone.Price = product.Price;
            }
            var result = await _context.SaveChangesAsync();
            if (result <= 0)
            {
                return new BadRequestObjectResult("Khong luu duoc!!!");
            }
            return new OkResult();
        }

        public async Task DeleteProduct(int id)
        {
            var pt = await GetProduct(id);

            pt.Status = false;
            var phone = await _context.Phones.FirstOrDefaultAsync(p => p.Id == pt.PhoneId);
            if (phone != null)
            {
                phone.SoLuong -= pt.Quantity;
            }
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
