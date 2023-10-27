function AddOrder() {
  return (
    <div className="flex items-center py-8 flex-col gap-16">
      <h1 className="text-5xl">Registrar pedido</h1>
      <form className="flex flex-col gap-4 items-center">

        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl font-bold">Cliente</h2>

          <div className="grid text-lg grid-cols-3 items-center justify-center gap-4">
            <label className="flex items-center justify-center gap-2">
              Nome:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Nome..." />
            </label>


            <label className="flex items-center justify-center gap-2">
              Rua:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Rua..." />
            </label>

            <label className="flex items-center justify-center gap-2">
              Número:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Número da rua..." />
            </label>

            <label className="flex items-center justify-center gap-2">
              Bairro:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Bairro..." />
            </label>

            <label className="flex items-center justify-center gap-2">
              Cidade:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Cidade..." />
            </label>

            <label className="flex items-center justify-center gap-2">
              Complemento:
              <input type="text" className="w-full p-[2px] pl-2 rounded" placeholder="Complemento..." />
            </label>
          </div>

        </div>

      </form>
    </div>
  )
}

export default AddOrder
