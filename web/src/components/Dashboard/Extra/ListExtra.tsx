function ListExtras() {
  return (
    <div className="flex flex-col gap-4 items-center p-6 bg-[#ddd] rounded w-[80%] h-[50%] overflow-auto">
      <h1 className="text-2xl font-bold">Adicionais</h1>
      <div className="flex flex-col gap-8 text-lg w-full">
        <div className="flex items-center justify-around">
          <span>ID</span>
          <span>Adicional</span>
          <span>Descrição</span>
          <span>Preço</span>
          <span>Alterar</span>
          <span>Excluir</span>
        </div>

        <div className="flex items-center justify-around">
          <span>1</span>
          <span>Borda catupiry</span>
          <span>Borda recheada com catupiry</span>
          <span>R$ 10.00</span>
          <button className="bg-blue rounded py-[1px] px-3 text-white">Editar</button>
          <button className="bg-primary rounded py-[1px] px-3 text-white">Excluir</button>
        </div>
      </div>

    </div>
  )
}

export default ListExtras
