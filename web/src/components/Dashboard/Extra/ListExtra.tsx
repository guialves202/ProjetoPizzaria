import { useState, useEffect } from "react"
import { ExtraModel } from "../../../types/Models"
import axios from "axios"

export function ListExtras() {
  const [extras, setExtras] = useState<ExtraModel[]>([])

  useEffect(() => {
    const getExtras= async () => {
      try {
        const fetchedExtras = await axios.get(`https://localhost:7118/api/Extra`)
        setExtras(fetchedExtras.data)
      } catch (err) {
        console.log(err)
      }
    }

    getExtras()
  }, [])

  return (
    <div className="flex flex-col gap-4 items-center p-6 bg-[#ddd] rounded-xl w-[80%] h-[50%]">
      <h1 className="text-2xl font-bold">Adicionais</h1>

      <div className="overflow-auto flex flex-col items-center w-full">
        <table className="list-table text-lg text-left align-middle w-[90%]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Adicional</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Alterar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              extras.map((extra, index) => {
                return (
                  <tr key={index}>
                    <td>{extra.id}</td>
                    <td>{extra.extra}</td>
                    <td>{extra.description}</td>
                    <td>R$ {extra.price.toString().includes('.') ? extra.price : `${extra.price.toString()}.00`}</td>
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
