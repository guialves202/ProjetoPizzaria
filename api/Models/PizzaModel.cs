namespace api.Models
{
    public class PizzaModel
    {
        public int Id { get; set; }
        public List<FlavorModel> Flavors { get; set; }
        public List<ExtraModel>? Extras { get; set; }
        public float Price { get; set; }
        public string? Notes { get; set; }

        public int OrderId { get; set; }
        public OrderModel Order { get; set; }

    }
}
