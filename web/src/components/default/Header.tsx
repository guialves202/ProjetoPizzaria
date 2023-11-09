export function Header() {
  return (
    <header className="flex items-center py-4 px-10 justify-between h-20">
      <figure className="flex items-center gap-5 text-yellow text-5xl">
        <img src="/images/pizza2.svg" alt="pizza-logo" className="h-16"></img>
        Pizza
      </figure>

      <nav>
        <ul className="flex gap-6 text-xl items-center">
          <li><a href="" className="text-yellow transition ease-in-out hover:brightness-75">Menu</a></li>
          <li><a href="" className="text-yellow transition ease-in-out hover:brightness-75">Contato</a></li>
          <li><button className="bg-yellow p-2 rounded">Pedir agora</button></li>
        </ul>
      </nav>
    </header>
  )
}
