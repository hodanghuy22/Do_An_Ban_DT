using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class PhoneRepository : IPhoneRepository
    {
        private readonly CSDLContext _context;
        public PhoneRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task CreatePhone(Phone phone)
        {
            await _context.Phones.AddAsync(phone);
        }

        public async Task DeletePhone(int id)
        {
            var pt = await GetPhone(id);

            pt.Status = false;
        }

        public async Task<Phone> GetPhone(int id)
        {
            return await _context.Phones.Include(p => p.Brand)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Phone>> GetPhones()
        {
            return await _context.Phones.Include(p => p.Brand)
                .ToListAsync();
        }

        public async Task<IEnumerable<Phone>> GetPhonesByBrand(int brandId)
        {
            return await _context.Phones.Include(p => p.Brand)
                .Where(p => p.BrandId == brandId)
                .ToListAsync();
        }

        public async Task<bool> PhoneExist(int id)
        {
            return await _context.Brands.AnyAsync(b => b.Id == id);
        }

        public async Task<IActionResult> UpdatePhone(Phone phone)
        {
            _context.Entry(phone).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!await PhoneExist(phone.Id))
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
