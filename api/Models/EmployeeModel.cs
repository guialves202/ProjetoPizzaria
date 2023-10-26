namespace api.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int RegistrationNumber { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string CPF { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.Now;
    }
}
