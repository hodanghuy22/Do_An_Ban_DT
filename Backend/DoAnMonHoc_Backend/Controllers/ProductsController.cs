using AutoMapper;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IPhotoService _photoService;
        public ProductsController(IUnitOfWork uow, IPhotoService photoService)
        {
            _uow = uow;
            _photoService = photoService;
        }
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _uow.ProductRepository.GetProducts();
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                MaxDepth = 100 // Tăng độ sâu tối đa của đối tượng nếu cần thiết
            };

            string json = JsonSerializer.Serialize(products, options);
            return Ok(products);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _uow.ProductRepository.GetProduct(id);
            return Ok(product);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            return await _uow.ProductRepository.CreateProduct(product);
        }
        [HttpPut]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            return await _uow.ProductRepository.UpdateProduct(product);
        }
        [HttpDelete]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var pt = await _uow.ProductRepository.ProductExist(id);
            if (pt == false)
            {
                return NotFound();
            }
            await _uow.ProductRepository.DeleteProduct(id);
            var result = await _uow.SaveAsync();
            if(result == false)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPost]
        [Route("add/photo/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddProductPhoto(int id, IFormFile file)
        {
            var result = await _photoService.UploadPhotoAsync(file);
            if (result.Error != null)
            {
                return BadRequest(result.Error.Message);
            }
            var product = await _uow.ProductRepository.GetProduct(id);
            if (product != null && result != null && result.SecureUrl != null)
            {
                var image = new Image
                {
                    HinhPublicId = result.PublicId,
                    Url = result.SecureUrl.ToString(),
                    ProductId = product.Id,
                };
                product.Images.Add(image);
                await _uow.SaveAsync();
            }
            return Ok(201);
        }
        [HttpDelete]
        [Route("delete-photo/{productId}/{publicId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteProductPhoto(int productId, string publicId)
        {
            var product = await _uow.ProductRepository.GetProduct(productId);
            var image = product.Images.FirstOrDefault(i => i.HinhPublicId == publicId);
            if (product == null || image == null)
            {
                return BadRequest();
            }
            var result = await _photoService.DeletePhotoAsync(image.HinhPublicId);
            if (result.Error != null)
            {
                return BadRequest(result.Error.Message);
            }
            product.Images.Remove(image);
            await _uow.SaveAsync();
            return Ok(201);
        }
    }
}
