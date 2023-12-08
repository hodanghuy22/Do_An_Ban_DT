using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface IColorRepository
    {
        Task CreateColor(Color color);
        Task<IEnumerable<Color>> GetColors();
        Task<Color> GetColor(int id);
        Task<bool> ColorExist(int id);
        Task<IActionResult> UpdateColor(Color color);
        Task DeleteColor(int id);
    }
}
