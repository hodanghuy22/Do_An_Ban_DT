using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface ICouponRepository
    {
        Task CreateCoupon(Coupon coupon);
        Task<IEnumerable<Coupon>> GetCoupons();
        Task<Coupon> GetCoupon(int id);
        Task<bool> CouponExist(int id);
        Task<IActionResult> UpdateCoupon(Coupon coupon);
        Task DeleteCoupon(int id);
    }
}
