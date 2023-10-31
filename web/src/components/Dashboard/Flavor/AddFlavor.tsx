import { FormEvent, useState } from "react"
import axios from 'axios'

function AddFlavor() {
  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  async function fetchData() {
    try {
      await axios.post('https://localhost:7118/api/Flavor', {
        Flavor: flavor,
        Price: price,
        Description: description
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <form className="flex flex-col gap-6 items-center w-[80%]" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Adicionar sabor</h1>

      <div className="text-lg w-[50%] flex gap-6">
        <label className="flex gap-2 w-full items-center">
          Sabor:
          <input className="w-full rounded py-[2px] px-2" type="text" placeholder="Sabor..." onChange={e => setFlavor(e.target.value)} />
        </label>

        <label className="flex gap-2 w-[50%] items-center">
          Preço:
          <input className="w-full rounded py-[2px] px-2" type="number" placeholder="Preço..." onChange={e => setPrice(e.target.value)} />
        </label>
      </div>

      <label className="flex text-lg gap-2 w-[50%] items-center">
        Descrição:
        <textarea className="w-full rounded p-2" placeholder="Descrição..." rows={3} onChange={e => setDescription(e.target.value)}></textarea>
      </label>

      <button className="rounded bg-blue py-[2px] px-2 text-white font-bold text-xl">Salvar</button>
    </form>
  )
}

export default AddFlavor
