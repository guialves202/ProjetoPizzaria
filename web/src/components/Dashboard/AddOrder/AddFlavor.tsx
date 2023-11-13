import { useEffect, useState } from "react"
import { FlavorModel } from "../../../types/Models"
import axios from "axios"

export function AddFlavor() {
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
    <div className="step-1 hidden flex-col gap-6 items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Sabores</h1>
      <table className="list-table text-lg max-w-[90%] overflow-y-auto max-h-[50vh] block">
        <thead>
          <tr>
            <th>Incluir</th>
            <th>Sabor</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            flavors.map((flavor, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{flavor.flavor}</td>
                  <td>{flavor.description}</td>
                  <td>R$ {flavor.price.toString().includes('.') ? flavor.price : `${flavor.price.toString()}.00`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
