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
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddBrandPhoto(IFormFile file)
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
            await _uow.SaveAsync();
            return Ok(201);
        }
        [HttpPost]
        [Route("delete-photo/{brandId}/{publicId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteBrandPhoto(int brandId, string publicId)
        {
            var brand = await _uow.BrandRepository.GetBrand(brandId);
            if (brand == null || brand.HinhPublicId != publicId)
            {
                return BadRequest();
            }
            var result = await _photoService.DeletePhotoAsync(brand.HinhPublicId);
            if (result.Error != null)
            {
                return BadRequest(result.Error.Message);
            }
            brand.FileHinh = "";
            brand.HinhPublicId = "";
            await _uow.SaveAsync();
            return Ok(201);
        }
    }
}
