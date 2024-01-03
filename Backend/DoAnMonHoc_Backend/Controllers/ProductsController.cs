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
        [HttpGet]
        [Route("GetAProductForUser/{phoneId}/{colorId}/{capacityId}")]
        public async Task<IActionResult> GetAProductForUser(int phoneId, int colorId, int capacityId)
        {
            var product = await _uow.ProductRepository.GetAProductForUser(phoneId, colorId, capacityId);
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
            var getProduct = await _uow.ProductRepository.GetProduct(product.Id);
            var sl = getProduct.Quantity;
            await _uow.ProductRepository.UpdateProduct(product);
            var afterProduct = await _uow.ProductRepository.GetProduct(product.Id);
            var phone = await _uow.PhoneRepository.GetPhone(product.PhoneId);
            if (phone.Price > getProduct.Price)
            {
                phone.Price = getProduct.Price;
            }
            if (afterProduct.Quantity < sl)
            {
                phone.SoLuong -= sl - afterProduct.Quantity;
            }
            else
            {
                phone.SoLuong += afterProduct.Quantity - sl;
            }
            var result = await _uow.SaveAsync();
            if (result == false)
            {
                return BadRequest();
            }
            return Ok();
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
    }
}
