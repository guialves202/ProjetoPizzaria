import { IoClose } from "react-icons/io5";
import { AddFlavor } from "./AddFlavor";
import { AddExtra } from "./AddExtra";
import { AddNotes } from "./AddNotes";
import { useEffect, useRef, useState } from "react";

export function Modal() {
  const [step, setStep] = useState(1)
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

    if (step == 1) {
      backButton.style.display = 'none'
    } else if (step == 3) {
      forwardButton.style.display = 'none'
    } else {
      backButton.style.display = 'block'
      forwardButton.style.display = 'block'
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

  return (
    <div className="modal">
      <div className="modal-content relative">
        <span onClick={closeModal} className="absolute top-2 right-2 text-xl cursor-pointer rounded-[50%] p-[1px] hover:text-white hover:bg-primary"><IoClose /></span>
        <AddFlavor />
        <AddExtra />
        <AddNotes />
        <div className="flex gap-6">
          <button className="back-button btn text-white bg-blue text-xl" onClick={() => decreaseStepState()}>Anterior</button>
          <button className="forward-button btn text-white bg-blue text-xl" onClick={() => increaseStepState()}>Próximo</button>
        </div>
      </div>
    </div>
  )
}
