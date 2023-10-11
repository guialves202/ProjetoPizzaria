function Menu() {
  return (
    <section className="flex flex-col gap-4 items-center bg-secondary py-6 min-h-screen">
      <h1 className="text-7xl font-bold text-yellow">Menu</h1>
      <p className="text-white text-lg w-1/2 text-center">Unique wood fired pizzas or be tempted by our pasta, antipasto, focaccias salads and Bruschetta dishes. Relax in the friendly ambience as you enjoy the aromas of the wood ovens or sit al fresco and soak up the Mildura sunshine.</p>
      <div className="grid grid-cols-2 gap-10">

       <div className="bg-white rounded p-4 flex gap-3 items-center justify-center">
        <img src="/images/pizza-banner.jpg" className="h-40 w-40"></img>
        <div className="flex flex-col gap-3 items-start justify-center">
          <h2 className="text-xl font-bold">Pizza name</h2>
          <p>Tomato sauce, mozzarella & oregano</p>
          <span className="font-bold text-lg">R$ 18.00</span>
          <button className="bg-yellow p-2 rounded font-bold">Add to cart</button>
        </div>
       </div>

       <div className="bg-white rounded p-4 flex gap-3 items-center justify-center">
        <img src="/images/pizza-banner.jpg" className="h-40 w-40"></img>
        <div className="flex flex-col gap-3 items-start justify-center">
          <h2 className="text-xl font-bold">Pizza name</h2>
          <p>Tomato sauce, mozzarella & oregano</p>
          <span className="font-bold text-lg">R$ 18.00</span>
          <button className="bg-yellow p-2 rounded font-bold">Add to cart</button>
        </div>
       </div>

       <div className="bg-white rounded p-4 flex gap-3 items-center justify-center">
        <img src="/images/pizza-banner.jpg" className="h-40 w-40"></img>
        <div className="flex flex-col gap-3 items-start justify-center">
          <h2 className="text-xl font-bold">Pizza name</h2>
          <p>Tomato sauce, mozzarella & oregano</p>
          <span className="font-bold text-lg">R$ 18.00</span>
          <button className="bg-yellow p-2 rounded font-bold">Add to cart</button>
        </div>
       </div>

       <div className="bg-white rounded p-4 flex gap-3 items-center justify-center">
        <img src="/images/pizza-banner.jpg" className="h-40 w-40"></img>
        <div className="flex flex-col gap-3 items-start justify-center">
          <h2 className="text-xl font-bold">Pizza name</h2>
          <p>Tomato sauce, mozzarella & oregano</p>
          <span className="font-bold text-lg">R$ 18.00</span>
          <button className="bg-yellow p-2 rounded font-bold">Add to cart</button>
        </div>
       </div>

      </div>
    </section>
  )
}

export default Menu
