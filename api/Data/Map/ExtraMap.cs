using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data.Map
{
    public class ExtraMap : IEntityTypeConfiguration<ExtraModel>
    {
        public void Configure(EntityTypeBuilder<ExtraModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Extra).IsRequired().HasMaxLength(80);
            builder.Property(x => x.Price).IsRequired().HasMaxLength(5);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(150);
        }
    }
}
