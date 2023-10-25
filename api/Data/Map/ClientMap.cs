using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data.Map
{
    public class ClientMap : IEntityTypeConfiguration<ClientModel>
    {
        public void Configure(EntityTypeBuilder<ClientModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.Street).IsRequired().HasMaxLength(255);
            builder.Property(x => x.StreetNumber).IsRequired().HasMaxLength(5);
            builder.Property(x => x.Neighborhood).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Complement).HasMaxLength(255);
            builder.Property(x => x.City).IsRequired().HasMaxLength(200);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(15);

            builder.Property(x => x.OrderId).IsRequired().HasMaxLength(15);
        }
    }
}
