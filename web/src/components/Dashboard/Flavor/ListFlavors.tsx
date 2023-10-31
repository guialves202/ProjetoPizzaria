import axios from "axios"
import { useEffect, useState } from "react"
import { FlavorModel } from '../../../types/FlavorModel'

function ListFlavors() {
  const [flavors, setFlavors] = useState<FlavorModel[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://localhost:7118/api/Flavor')
        setFlavors(response.data)
        console.log(flavors)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  if (flavors.length <= 0) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="flex flex-col gap-4 items-center p-6 bg-[#ddd] rounded w-[80%] h-[50%] overflow-auto">
      <h1 className="text-2xl font-bold">Sabores</h1>
      <div className="flex flex-col gap-8 text-lg w-full">

        <div className="flex items-center justify-around">
          <span>ID</span>
          <span>Sabor</span>
          <span>Descrição</span>
          <span>Preço</span>
          <span>Alterar</span>
          <span>Excluir</span>
        </div>

        {flavors.length > 0 ? flavors.map((flavor, index) => {
          return (
            <div className="flex items-center justify-around" key={index}>
              <span>{flavor.Id}</span>
              <span>{flavor.Flavor}</span>
              <span>{flavor.Description}</span>
              <span>R$ {flavor.Price}</span>
              <button className="bg-blue rounded py-[1px] px-3 text-white">Editar</button>
              <button className="bg-primary rounded py-[1px] px-3 text-white">Excluir</button>
            </div>
          )
        }) : (
          <div>Loading...</div>
        )}

      </div>
    </div>
  )
}

export default ListFlavors
