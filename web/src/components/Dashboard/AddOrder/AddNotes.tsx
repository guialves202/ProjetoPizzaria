import { useState } from "react"

type Props = {
  setNote: React.Dispatch<React.SetStateAction<string>>
}

export function AddNotes({setNote}: Props) {
  const [noteText, setNoteText] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote(event.target.value)
    setNoteText(event.target.value)
  }

  return (
    <div className="step-3 hidden flex-col gap-6 items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Observações</h1>
      <textarea className="w-[80%] p-4 rounded-xl text-xl" placeholder="Observações..." value={noteText} rows={5} onInput={handleChange}></textarea>
    </div>
  )
}
