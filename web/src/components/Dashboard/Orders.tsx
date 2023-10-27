function Orders() {
  return (
    <div className="flex items-center py-8 flex-col gap-16">
      <h1 className="text-5xl">Pedidos</h1>
      <table className="orders-table text-lg text-left align-middle">
        <tr>
          <th>Nº pedido</th>
          <th>Pizzas</th>
          <th>Cliente</th>
          <th>Preço</th>
          <th>Método de pagamento</th>
          <th>Status</th>
          <th>Horário</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Frango, Queijo</td>
          <td>Gui</td>
          <td>R$ 35.00</td>
          <td>Cartão</td>
          <td>Saiu para entrega</td>
          <td>27/10/2023 00:59</td>
        </tr>
      </table>
    </div>
  )
}

export default Orders
