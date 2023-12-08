using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;

        public CouponsController(IUnitOfWork uow)
        {
            _uow = uow;
        }
        [HttpGet]
        public async Task<IActionResult> GetCoupons()
        {
            var coupons = await _uow.CouponRepository.GetCoupons();
            return Ok(coupons);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetCoupon(int id)
        {
            var coupon = await _uow.CouponRepository.GetCoupon(id);
            return Ok(coupon);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateCoupon(Coupon coupon)
        {
            var checkCoupon = await _uow.CouponRepository.CouponExist(coupon.Id);
            if (checkCoupon == true)
            {
                return BadRequest();
            }
            _uow.CouponRepository.CreateCoupon(coupon);
            var result = await _uow.SaveAsync();
            if (!result)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPut]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateCoupon(int id, Coupon coupon)
        {
            if (id != coupon.Id)
            {
                return BadRequest();
            }
            return await _uow.CouponRepository.UpdateCoupon(coupon);
        }
        [HttpPut]
        [Route("DeleteCoupon/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteCoupon(int id)
        {
            await _uow.CouponRepository.DeleteCoupon(id);
            var result = await _uow.SaveAsync();
            return Ok();
        }
    }
}
