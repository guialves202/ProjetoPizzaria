import { useEffect, useState } from "react";
import { PizzaProvider } from "../../../context/PizzaContext";
import { AddClient } from "./AddClient";
import { Modal } from "./modal";
import { PizzaModel } from "../../../types/Models";

export function AddOrder() {
  const [pizzas, setPizzas] = useState<PizzaModel[]>([])

  window.addEventListener('click', (event: Event) => {
    const modal = document.querySelector('.modal') as HTMLDivElement
    if (event.target == modal) modal.style.display = 'none'
  })

  function openModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement
    modal.style.display = 'flex'
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  useEffect(() => {

  }, [pizzas])

  return (
    <PizzaProvider>
      <div className="flex justify-center relative">
        <form className="flex py-8 flex-col gap-16 items-center" onSubmit={(e: React.FormEvent<HTMLFormElement>): void => handleSubmit(e)}>
          <h1 className="text-5xl text-center">Registrar pedido</h1>
          <AddClient />
          <div className="w-full">
            {
              pizzas.map((pizza, index) => {
                return (
                  <div key={index}>
                    <p>{pizza.id}</p>
                    <p>{pizza.flavors}</p>
                    <p>{pizza.extras}</p>
                    <p>{pizza.price}</p>
                    <p>{pizza.notes}</p>
                    <p>{pizza.orderId}</p>
                  </div>
                )
              })
            }
            <button onClick={openModal} className="add-pizza btn text-white bg-blue text-xl">Adicionar pizza</button>
          </div>
        </form>

        <Modal setPizzas={setPizzas} />
      </div>
    </PizzaProvider>

  )
}
