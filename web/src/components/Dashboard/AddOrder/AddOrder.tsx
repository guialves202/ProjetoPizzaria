import { AddClient } from "./AddClient";
import { Modal } from "./modal";

export function AddOrder() {
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

  return (
    <div className="flex justify-center relative">
      <form className="flex py-8 flex-col gap-16 items-center" onSubmit={(e: React.FormEvent<HTMLFormElement>): void => handleSubmit(e)}>
        <h1 className="text-5xl text-center">Registrar pedido</h1>
        <AddClient />
        <div className="w-full">
          <button onClick={openModal} className="add-pizza btn text-white bg-blue text-xl">Adicionar pizza</button>
        </div>
      </form>

      <Modal />
    </div>
  )
}
