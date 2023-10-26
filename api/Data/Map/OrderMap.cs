using api.Enums;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Map
{
    public class OrderMap : IEntityTypeConfiguration<OrderModel>
    {
        public void Configure(EntityTypeBuilder<OrderModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Price).IsRequired().HasMaxLength(7);
            builder.Property(x => x.PaymentMethod).IsRequired().HasMaxLength(255);
            builder.Property(x => x.CreatedAt).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Status).IsRequired().HasMaxLength(50).HasDefaultValue(OrderStatus.Analyzing);
        }
    }
}
