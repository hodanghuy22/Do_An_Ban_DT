using AutoMapper;
using DoAnMonHoc_Backend.Dto;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlideshowsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IPhotoService _photoService;
        public SlideshowsController(IPhotoService photoService, IUnitOfWork uow)
        {
            _photoService = photoService;
            _uow = uow;
        }
        [HttpGet("Admin")]
        public async Task<IActionResult> GetSlideshows()
        {
            var sildeshows = await _uow.SlideshowRepository.GetSlideshows();
            return Ok(sildeshows);
        }

        [HttpGet]
        public async Task<IActionResult> GetSlideshowsForPresent()
        {
            var sildeshows = await _uow.SlideshowRepository.GetSlideshowsForPresent();
            return Ok(sildeshows);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddSlideShow(Slideshow slideshow)
        {
            return await _uow.SlideshowRepository.CreateSlideshow(slideshow);
        }
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteSlideShow (int slideshowId)
        {
            var slideshow = await _uow.SlideshowRepository.GetSlideshow(slideshowId);
            if(slideshow == null)
            {
                return NotFound();
            }
            await _uow.SlideshowRepository.DeleteSlideshow(slideshowId);
            var save = await _uow.SaveAsync();
            if (!save)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
