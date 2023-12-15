import { useEffect, useState } from "react"
import { ExtraModel } from "../../../types/Models"
import axios from "axios"

type Props = {
  setExtra: React.Dispatch<React.SetStateAction<string[]>>
}

export function AddExtra({setExtra}: Props) {
  const [extras, setExtras] = useState<ExtraModel[]>([])

  useEffect(() => {
    const getExtras = async () => {
      try {
        const fetchedExtras = await axios.get(`https://localhost:7118/api/Extra`)
        setExtras(fetchedExtras.data)
      } catch (err) {
        console.log(err)
      }
    }

    getExtras()
  }, [])

  const addOrRemove = (extra: string) => {
    setExtra(prevState => {
      const newExtras = [...prevState]
      const index = newExtras.indexOf(extra)
      if (index === -1) {
        newExtras.push(extra)
        return newExtras
      }

      newExtras.splice(index, 1)
      return newExtras
    })
  }

  return (
    <div className="step-2 hidden flex-col gap-6 items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Adicionais</h1>
      <table className="list-table text-lg max-w-[90%] overflow-y-auto max-h-[50vh] block">
        <thead>
          <tr>
            <th>Incluir</th>
            <th>Adicional</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            extras.map((extra, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" onClick={() => addOrRemove(extra.extra)} />
                  </td>
                  <td>{extra.extra}</td>
                  <td>{extra.description}</td>
                  <td>R$ {extra.price.toString().includes('.') ? extra.price : `${extra.price.toString()}.00`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
