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
        [HttpGet("for-admin")]
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
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddSlideShow(IFormFile file)
        {
            var result = await _photoService.UploadPhotoAsync(file);
            if (result.Error != null)
            {
                return BadRequest(result.Error.Message);
            }
            var slideshow = new Slideshow
            {
                Url = result.SecureUrl.ToString(),
                PublicId = result.PublicId,
                Status = true
            };
            await _uow.SlideshowRepository.CreateSlideshow(slideshow);
            var save = await _uow.SaveAsync();
            if (!save)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpDelete]
        //[Authorize(Roles = "Admin")]
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
