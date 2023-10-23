using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Data.Map
{
    public class PizzaMap: IEntityTypeConfiguration<PizzaModel>
    {
        public void Configure(EntityTypeBuilder<PizzaModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Price).IsRequired().HasMaxLength(7);
            builder.Property(x => x.Notes).HasMaxLength(255);

            builder.Property(x => x.OrderId).IsRequired();
        }
    }
}
