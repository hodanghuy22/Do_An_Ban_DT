using AutoMapper;
using DoAnMonHoc_Backend.Dto;
using DoAnMonHoc_Backend.Interfaces;
using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ColorsController(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetColors()
        {
            var colors = await _uow.ColorRepository.GetColors();
            var colorsDto = _mapper.Map<IEnumerable<ColorDto>>(colors);
            return Ok(colors);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetColor(int id)
        {
            var color = await _uow.ColorRepository.GetColor(id);
            var colorDto = _mapper.Map<ColorDto>(color);
            return Ok(colorDto);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateColor(Color color)
        {
            var checkColor = await _uow.ColorRepository.ColorExist(color.Id);
            if (checkColor == true)
            {
                return BadRequest();
            }
            _uow.ColorRepository.CreateColor(color);
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
        public async Task<IActionResult> UpdateColor(int id, Color color)
        {
            if (id != color.Id)
            {
                return BadRequest();
            }
            return await _uow.ColorRepository.UpdateColor(color);
        }
        [HttpPut]
        [Route("DeleteColor/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteColor(int id)
        {
            var pt = await _uow.ColorRepository.ColorExist(id);
            if (pt == false)
            {
                return NotFound();
            }
            await _uow.ColorRepository.DeleteColor(id);
            var result = await _uow.SaveAsync();
            return Ok();
        }
    }
}
