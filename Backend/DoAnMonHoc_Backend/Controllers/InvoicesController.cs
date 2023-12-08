using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class InvoicesController : ControllerBase
    {
        private readonly IUnitOfWork _uow;

        public InvoicesController(IUnitOfWork uow)
        {
            _uow = uow;
        }
        [HttpGet]
        [Route("{userId}")]
        public async Task<IActionResult> GetInvoices(string userId)
        {
            var invoices = await _uow.InvoiceRepository.GetInvoices(userId);
            return Ok(invoices);
        }
        [HttpGet]
        [Route("GetInvoicesByStatus/{userId}/{status}")]
        public async Task<IActionResult> GetInvoicesByStatus(string userId, string status)
        {
            var invoices = await _uow.InvoiceRepository.GetInvoicesByStatus(userId, status);
            return Ok(invoices);
        }
        //[HttpGet]
        //[Route("{id}")]
        //public async Task<IActionResult> GetInvoice(int id)
        //{
        //    var invoice = await _uow.InvoiceRepository.GetInvoice(id);
        //    return Ok(invoice);
        //}
        [HttpPost]
        public async Task<IActionResult> CreateInvoice(Invoice invoice)
        {
            var checkInvoice = await _uow.InvoiceRepository.InvoiceExist(invoice.Id);
            if (checkInvoice == true)
            {
                return BadRequest();
            }
            _uow.InvoiceRepository.CreateInvoice(invoice);
            var result = await _uow.SaveAsync();
            if (!result)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateInvoice(int id, Invoice invoice)
        {
            if (id != invoice.Id)
            {
                return BadRequest();
            }
            return await _uow.InvoiceRepository.UpdateInvoice(invoice);
        }
        [HttpPut]
        [Route("DeleteInvoice/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteInvoice(int id)
        {
            await _uow.InvoiceRepository.DeleteInvoice(id);
            var result = await _uow.SaveAsync();
            return Ok();
        }
    }
}
