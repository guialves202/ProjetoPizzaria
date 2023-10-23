using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data.Map
{
    public class FlavorMap : IEntityTypeConfiguration<FlavorModel>
    {
        public void Configure(EntityTypeBuilder<FlavorModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Flavor).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Price).IsRequired().HasMaxLength(5);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(150);
        }
    }
}
