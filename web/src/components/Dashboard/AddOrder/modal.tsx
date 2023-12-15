import { IoClose } from "react-icons/io5";
import { AddFlavor } from "./AddFlavor";
import { AddExtra } from "./AddExtra";
import { AddNotes } from "./AddNotes";
import { useEffect, useRef, useState } from "react";
import { PizzaModel } from "../../../types/Models";

type Props = {
  setPizzas: React.Dispatch<React.SetStateAction<PizzaModel[]>>
}

export function Modal({setPizzas}: Props) {
  const [step, setStep] = useState(1)
  const [flavors, setFlavors] = useState<string[]>([])
  const [extras, setExtras] = useState<string[]>([])
  const [notes, setNotes] = useState<string>("")
  const prevStep = useRef(3)

  function closeModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement
    modal.style.display = 'none'
  }

  useEffect(() => {
    const previousStep = document.querySelector(`.step-${prevStep.current}`) as HTMLDivElement
    const newStep = document.querySelector(`.step-${step}`) as HTMLDivElement

    previousStep.style.display = 'none'
    newStep.style.display = 'flex'

    const backButton = document.querySelector('.back-button') as HTMLButtonElement
    const forwardButton = document.querySelector('.forward-button') as HTMLButtonElement
    const addButton = document.querySelector('.add-button') as HTMLButtonElement

    if (step == 1) {
      backButton.style.display = 'none'
      addButton.style.display = 'none'
    } else if (step == 3) {
      forwardButton.style.display = 'none'
      addButton.style.display = 'block'
    } else {
      backButton.style.display = 'block'
      forwardButton.style.display = 'block'
      addButton.style.display = 'none'
    }

    prevStep.current = step
  }, [step])

  function decreaseStepState() {
    if (step == 1) return

    setStep(prevStep => prevStep - 1)
  }

  function increaseStepState() {
    if (step == 3) return

    setStep(prevStep => prevStep + 1)
  }

  function addPizza() {
    const pizza: PizzaModel = {
      flavors,
      extras,
      notes,
      price: 100
    }

    setPizzas(prevState => [...prevState, pizza])
  }



  return (
    <div className="modal">
      <div className="modal-content relative">
        <span onClick={closeModal} className="absolute top-2 right-2 text-xl cursor-pointer rounded-[50%] p-[1px] hover:text-white hover:bg-primary"><IoClose /></span>
        <AddFlavor setFlavor={setFlavors} />
        <AddExtra setExtra={setExtras} />
        <AddNotes setNote={setNotes} />
        <div className="flex gap-6">
          <button className="back-button btn text-white bg-blue text-xl" onClick={() => decreaseStepState()}>Anterior</button>
          <button className="forward-button btn text-white bg-blue text-xl" onClick={() => increaseStepState()}>Próximo</button>
          <button className="add-button btn text-white bg-blue text-xl" onClick={() => addPizza()}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}
