namespace api.Models
{
    public class PizzaModel
    {
        public int Id { get; set; }
        public ICollection<string> Flavors { get; set; }
        public ICollection<string>? Extras { get; set; }
        public float Price { get; set; }
        public string? Notes { get; set; }
        public int OrderId { get; set; }
    }
}
