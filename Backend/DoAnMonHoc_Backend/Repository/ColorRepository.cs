using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class ColorRepository : IColorRepository
    {
        private readonly CSDLContext _context;

        public ColorRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task<bool> ColorExist(int id)
        {
            return await _context.Colors.AnyAsync(c => c.Id == id);
        }

        public async Task CreateColor(Color color)
        {
            await _context.Colors.AddAsync(color);
        }

        public async Task DeleteColor(int id)
        {
            var pt = await GetColor(id);

            pt.Status = false;
        }

        public async Task<Color> GetColor(int id)
        {
            return await _context.Colors.FindAsync(id);
        }

        public async Task<IEnumerable<Color>> GetColors()
        {
            return await _context.Colors.ToListAsync();
        }

        public async Task<IActionResult> UpdateColor(Color color)
        {
            _context.Entry(color).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!await ColorExist(color.Id))
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
