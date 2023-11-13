export function AddNotes() {
  return (
    <div className="step-3 hidden flex-col gap-6 items-center justify-center w-full">
      <h1 className="text-4xl font-bold">Observações</h1>
      <textarea className="w-[80%] p-4 rounded-xl text-xl" placeholder="Observações..." rows={5}></textarea>
    </div>
  )
}
