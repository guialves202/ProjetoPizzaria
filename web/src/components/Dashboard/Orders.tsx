import { useEffect, useState } from 'react'
import { MdEdit, MdDeleteForever } from 'react-icons/md'
import { OrderModel, OrderStatus } from '../../types/Models'
import axios from 'axios'

export function Orders() {
  const [orders, setOrders] = useState<OrderModel[]>([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await axios.get('https://localhost:7118/api/Order')
        setOrders(fetchedOrders.data)

        console.log(fetchedOrders)
      } catch (err) {
        console.log(err)
      }
    }

    getOrders()
  }, [])

  return (
    <div className="flex items-center py-8 flex-col gap-16">
      <h1 className="text-5xl">Pedidos</h1>
      <table className="list-table text-lg text-left align-middle max-w-[90%]">
        <thead>
          <tr>
            <th>Nº pedido</th>
            <th>Pizzas</th>
            <th>Cliente</th>
            <th>Preço</th>
            <th>Método de pagamento</th>
            <th>Status</th>
            <th colSpan={2}>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>
                    <ol className='list-decimal'>
                      {
                        order.pizzas.map((pizza, index) => {
                          return <li key={index}>{pizza.flavors.join(', ')}</li>
                        })
                      }
                    </ol>

                  </td>
                  <td>{order.client.name}</td>
                  <td>R$ {order.price.toString().includes('.') ? order.price : `${order.price.toString()}.00`}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{OrderStatus[order.status]}</td>
                  <td>
                    <button className='text-blue mr-4 text-2xl hover:bg-blue hover:text-white rounded p-[2px] transition-all'><MdEdit /></button>
                  </td>
                  <td>
                    <button className='text-primary text-2xl hover:bg-primary hover:text-white rounded p-[2px] transition-all'><MdDeleteForever /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
