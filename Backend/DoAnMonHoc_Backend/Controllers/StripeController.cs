using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StripeController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public StripeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public async Task<IActionResult> ProcessPayment([FromBody] PaymentRequest paymentRequest)
        {
            StripeConfiguration.ApiKey = _configuration["StripeSetting:SecretKey"];

            var options = new ChargeCreateOptions
            {
                Amount = paymentRequest.Amount,
                Currency = "usd",
                Description = paymentRequest.Description,
                Source = paymentRequest.Token // Stripe token from client-side
            };

            var service = new ChargeService();
            var charge = await service.CreateAsync(options);

            // Xử lý kết quả thanh toán ở đây
            // ...

            return Ok();
        }
    }
}
