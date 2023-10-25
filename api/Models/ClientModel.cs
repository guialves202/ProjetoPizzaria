using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class ClientModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string StreetNumber { get; set; }
        public string Neighborhood { get; set; }
        public string? Complement { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public int OrderId { get; set; }
    }
}
