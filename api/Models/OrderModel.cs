namespace api.Models
{
    public class OrderModel
    {
        public int Id { get; set; }
        public ClientModel Client { get; set; }
        public ICollection<PizzaModel> Pizzas { get; set; } = new List<PizzaModel>();
        public float Price { get; set; }
        public string PaymentMethod { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
