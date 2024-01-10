using DoAnMonHoc_Backend.Data;
using DoAnMonHoc_Backend.Dto;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoAnMonHoc_Backend.Repository
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly CSDLContext _context;
        public InvoiceRepository(CSDLContext context)
        {
            _context = context;
        }
        public async Task CreateInvoice(Invoice invoice)
        {
            await _context.Invoices.AddAsync(invoice);
        }

        public async Task DeleteInvoice(int id)
        {
            var invoice = await _context.Invoices.FindAsync(id);
            if (invoice != null)
            {
                invoice.OrderStatus = "Da Xoa Don Hang";
            }
        }

        public async Task<Invoice> GetInvoice(int id)
        {
            return await _context.Invoices
                    .Include(i => i.User)
                    .Include(i => i.Coupon)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Color)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Capacity)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Phone)
                    .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Invoice>> GetInvoices(string userID)
        {
            return await _context.Invoices.Include(i => i.User)
                    .Include(i => i.Coupon)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Color)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Capacity)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Phone)
                .Where(i => i.UserId == userID)
                .ToListAsync();
        }

        public async Task<IEnumerable<Invoice>> GetInvoicesByStatus(string userID,string status)
        {
            return await _context.Invoices.Include(i => i.User)
                    .Include(i => i.Coupon)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Color)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Capacity)
                    .Include(i => i.InvoiceDetails)
                        .ThenInclude(i => i.Product)
                            .ThenInclude(p => p.Phone)
                .Where(i => i.UserId == userID && i.OrderStatus == status)
                .ToListAsync();
        }

        public async Task<IEnumerable<Invoice>> GetInvoicesForAdmin()
        {
            return await _context.Invoices.Include(i => i.Coupon)
                .Include(i => i.User)
                .Include(i => i.InvoiceDetails)
               .ToListAsync();
        }

        public async Task<bool> InvoiceExist(int id)
        {
            return await _context.Invoices.AnyAsync(b => b.Id == id);
        }

        public async Task<IActionResult> UpdateInvoice(Invoice invoice)
        {
            _context.Entry(invoice).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!await InvoiceExist(invoice.Id))
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

        public async Task<IActionResult> UpdateStatusInvoice(int id, string status)
        {
            var invoice = await _context.Invoices.FindAsync(id);
            if (invoice != null)
            {
                invoice.OrderStatus = status;
                var rs = await _context.SaveChangesAsync();
                if(rs > 0)
                {
                    return new OkResult();
                }
            }
            return new BadRequestResult();
        }
    }
}
