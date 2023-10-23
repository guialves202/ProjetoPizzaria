using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class OrderModel
    {
        public int Id { get; set; }
        public ClientModel Client { get; set; }
        public List<PizzaModel> Pizzas { get; set; }
        public float Price { get; set; }
        public string PaymentMethod { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
