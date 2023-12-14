﻿using DoAnMonHoc_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoAnMonHoc_Backend.Interfaces
{
    public interface ISlideshowRepository
    {
        Task CreateSlideshow(Slideshow slideshow);
        Task<IEnumerable<Slideshow>> GetSlideshows();
        Task<Slideshow> GetSlideshow(int id);
        Task<IEnumerable<Slideshow>> GetSlideshowsForPresent();
        Task<bool> SlideshowExist(int id);
        Task<IActionResult> UpdateSlideshow(Slideshow slideshow);
        Task DeleteSlideshow(int id);
    }
}