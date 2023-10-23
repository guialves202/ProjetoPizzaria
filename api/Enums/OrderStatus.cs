using System.ComponentModel;

namespace api.Enums
{
    public enum OrderStatus
    {
        [Description("A fazer")]
        ToDo = 1,
        [Description("Fazendo")]
        Doing = 2,
        [Description("Feito")]
        Done = 3
    }
}
