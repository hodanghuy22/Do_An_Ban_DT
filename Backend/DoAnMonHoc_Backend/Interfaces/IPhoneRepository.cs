using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IPhoneRepository
    {
        Task CreatePhone(Phone phone);
        Task<IEnumerable<Phone>> GetPhones();
        Task<IEnumerable<Phone>> GetPhonesByBrand(int brandId);
        Task<Phone> GetPhone(int id);
        Task<bool> PhoneExist(int id);
        Task<IActionResult> UpdatePhone(Phone phone);
        Task DeletePhone(int id);
    }
}
