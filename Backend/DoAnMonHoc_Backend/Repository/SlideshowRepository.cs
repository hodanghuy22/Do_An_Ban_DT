using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class SlideshowRepository : ISlideshowRepository
    {
        private readonly CSDLContext _context;

        public SlideshowRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task<bool> SlideshowExist(int id)
        {
            return await _context.Slideshows.AnyAsync(c => c.Id == id);
        }

        public async Task CreateSlideshow(Slideshow slideshow)
        {
            await _context.Slideshows.AddAsync(slideshow);
        }

        public async Task DeleteSlideshow(int id)
        {
            var pt = await GetSlideshow(id);

            pt.Status = false;
        }

        public async Task<IEnumerable<Slideshow>> GetSlideshows()
        {
            return await _context.Slideshows.ToListAsync();
        }
        public async Task<Slideshow> GetSlideshow(int id)
        {
            return await _context.Slideshows.FindAsync(id);
        }

        public async Task<IEnumerable<Slideshow>> GetSlideshowsForPresent()
        {
            return await _context.Slideshows.Where(s => s.Status == true).ToListAsync();
        }

        public async Task<IActionResult> UpdateSlideshow(Slideshow slideshow)
        {
            _context.Entry(slideshow).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                if (!await SlideshowExist(slideshow.Id))
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
