function AddFlavor() {
  return (
    <form className="flex flex-col gap-6 items-center w-[80%]">
      <h1 className="text-2xl font-bold">Adicionar sabor</h1>

      <div className="text-lg w-[50%] flex gap-6">
        <label className="flex gap-2 w-full items-center">
          Sabor:
          <input className="w-full rounded py-[2px] px-2" type="text" placeholder="Sabor..." />
        </label>

        <label className="flex gap-2 w-[50%] items-center">
          Preço:
          <input className="w-full rounded py-[2px] px-2" type="number" placeholder="Preço..." />
        </label>
      </div>

      <label className="flex text-lg gap-2 w-[50%] items-center">
        Descrição:
        <textarea className="w-full rounded p-2" placeholder="Descrição..." rows={3}></textarea>
      </label>

      <button className="rounded bg-[#0096ff] py-[2px] px-2 text-white font-bold text-xl">Salvar</button>
    </form>
  )
}

export default AddFlavor
