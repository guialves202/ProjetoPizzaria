namespace api.Models
{
    public class ExtraModel
    {
        public int Id { get; set; }
        public string Extra { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public List<PizzaModel>? Pizzas { get; set; }
    }
}
