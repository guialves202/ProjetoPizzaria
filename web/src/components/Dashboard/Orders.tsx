import { MdEdit, MdDeleteForever } from 'react-icons/md'

function Orders() {
  return (
    <div className="flex items-center py-8 flex-col gap-16">
      <h1 className="text-5xl">Pedidos</h1>
      <table className="orders-table text-lg text-left align-middle max-w-[90%]">
        <tr>
          <th>Nº pedido</th>
          <th>Pizzas</th>
          <th>Cliente</th>
          <th>Preço</th>
          <th>Método de pagamento</th>
          <th>Status</th>
          <th colSpan={2}>Alterar</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Pizza 1: Frango com Catupiry e 4 Queijos. Pizza 2: Bacon e Brócolis</td>
          <td>Gui</td>
          <td>R$ 35.00</td>
          <td>Cartão</td>
          <td>Saiu para entrega</td>
          <td>
            <button className='text-blue mr-4 text-2xl hover:bg-blue hover:text-white rounded p-[2px] transition-all'><MdEdit /></button>
          </td>
          <td>
            <button className='text-primary text-2xl hover:bg-primary hover:text-white rounded p-[2px] transition-all'><MdDeleteForever /></button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Orders
