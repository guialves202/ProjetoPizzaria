using api.Data.Map;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Hosting;
using System.Reflection.Metadata;
using System.Text.Json;

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
            modelBuilder.Entity<PizzaModel>()
                .Property(e => e.Flavors)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null),
                    new ValueComparer<ICollection<string>>(
                        (c1, c2) => c1.SequenceEqual(c2),
                        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
                        c => (ICollection<string>)c.ToList()));

            modelBuilder.Entity<PizzaModel>()
                .Property(e => e.Extras)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions)null),
                    new ValueComparer<ICollection<string>>(
                        (c1, c2) => c1.SequenceEqual(c2),
                        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
                        c => (ICollection<string>)c.ToList()));

            modelBuilder.Entity<OrderModel>()
                .HasOne(e => e.Client)
                .WithOne()
                .HasForeignKey<ClientModel>(e => e.OrderId)
                .IsRequired();

            modelBuilder.Entity<OrderModel>()
                .HasMany(e => e.Pizzas)
                .WithOne()
                .HasForeignKey(e => e.OrderId)
                .IsRequired();


            modelBuilder.ApplyConfiguration(new ClientMap());
            modelBuilder.ApplyConfiguration(new ExtraMap());
            modelBuilder.ApplyConfiguration(new FlavorMap());
            modelBuilder.ApplyConfiguration(new OrderMap());
            modelBuilder.ApplyConfiguration(new PizzaMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
