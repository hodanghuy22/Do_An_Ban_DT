using DoAnMonHoc_Backend.Dto;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IUserRepositoty
    {
        Task<IActionResult> RegisterAdmin(string Username, string Password, string Email);
        Task<IActionResult> Register(string Username, string Password, string Email);
        Task<IActionResult> Login([Bind("Username,Password")] LoginModel account);
        Task<IActionResult> UpdateUser(string id, UserDto userDto);
        Task<IActionResult> ChangePassword(string id, ChangePasswordModel changePasswordModel);
        Task<IEnumerable<UserDto>> GetUsers();
        Task<User> GetUser(string id);
        Task<User> GetUserByEmail(string email);
        Task<bool> UserExist(string id);
        Task<IActionResult> ForgetPassword(string email);
        Task<IActionResult> ResetPassword(ResetPasswordModel model);

    }
}
