using api.Data.Map;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class PizzariaDbContext : DbContext
    {
        public PizzariaDbContext(DbContextOptions<PizzariaDbContext> options) : base(options)
        {

        }

        public DbSet<ClientModel> Clients { get; set; }
        public DbSet<ExtraModel> Extras { get; set; }
        public DbSet<FlavorModel> Flavors { get; set; }
        public DbSet<OrderModel> Orders { get; set; }
        public DbSet<PizzaModel> Pizzas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClientMap());
            modelBuilder.ApplyConfiguration(new ExtraMap());
            modelBuilder.ApplyConfiguration(new FlavorMap());
            modelBuilder.ApplyConfiguration(new OrderMap());
            modelBuilder.ApplyConfiguration(new PizzaMap());

            modelBuilder.Entity<OrderModel>()
                .HasOne(e => e.Client)
                .WithOne(e => e.Order)
                .HasForeignKey<ClientModel>(e => e.OrderId)
                .IsRequired();


            base.OnModelCreating(modelBuilder);
        }
    }
}
