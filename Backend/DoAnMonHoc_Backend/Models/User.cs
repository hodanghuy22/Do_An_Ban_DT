using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace DoAnMonHoc_Backend.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string FileHinh { get; set; }
        [JsonIgnore]
        public List<Comment> Comments { get; set; }
        [JsonIgnore]
        public List<Invoice> Invoices { get; set; } 
    }
}
