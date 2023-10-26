using System.ComponentModel;

namespace api.Enums
{
    public enum OrderStatus
    {
        [Description("Em Análise")]
        Analyzing = 1,
        [Description("Fazendo")]
        Doing = 2,
        [Description("Saiu para entrega")]
        Delivering = 3,
        [Description("Entregue")]
        Delivered = 4,
        [Description("Cancelado")]
        Canceled = 5,
        [Description("Reembolsado")]
        Refunded = 6,
        [Description("Não recebido")]
        NotReceived = 7
    }
}
