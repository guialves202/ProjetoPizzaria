import axios from "axios"
import { useEffect, useState } from "react"
import { FlavorModel } from '../../../types/Models'

export function ListFlavors() {
  const [flavors, setFlavors] = useState<FlavorModel[]>([])

  useEffect(() => {
    const getFlavors = async () => {
      try {
        const fetchedFlavors = await axios.get(`https://localhost:7118/api/Flavor`)
        setFlavors(fetchedFlavors.data)
      } catch (err) {
        console.log(err)
      }
    }

    getFlavors()
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center p-6 bg-[#ddd] rounded-xl w-[80%] h-[50%]">
      <h1 className="text-2xl font-bold">Sabores</h1>

      <div className="overflow-auto flex flex-col items-center w-full">
        <table className="list-table text-lg text-left align-middle w-[90%]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sabor</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Alterar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              flavors.map((flavor, index) => {
                return (
                  <tr key={index}>
                    <td>{flavor.id}</td>
                    <td>{flavor.flavor}</td>
                    <td>{flavor.description}</td>
                    <td>R$ {flavor.price.toString().includes('.') ? flavor.price : `${flavor.price.toString()}.00`}</td>
                    <td>
                      <button className="bg-blue rounded py-[1px] px-3 text-white">Editar</button>

                    </td>
                    <td>
                      <button className="bg-primary rounded py-[1px] px-3 text-white">Excluir</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
