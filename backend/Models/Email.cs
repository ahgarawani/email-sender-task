using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Email
    {
        [Key]
        public int Id { get; set; }
        public string Subject { get; set; } = "";
        public string Message { get; set; } = "";
    }
}
