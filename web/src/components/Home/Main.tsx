function Main() {
  return (
    <section className="h-[calc(100vh-80px)] flex items-center justify-center">
      <img src="/images/pizza-banner4.jpg" className="absolute top-0 left-0 -z-50 brightness-50"></img>

      <div className="flex items-center flex-col justify-evenly p-10 border-solid gap-16">
        <h1 className="text-yellow text-9xl font-bold break-words italic">Le Migliore Pizzas</h1>

        <button className="bg-yellow p-4 text-2xl rounded italic">Experimentar</button>
      </div>
    </section>
  )
}

export default Main
