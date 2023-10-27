import { Link } from "react-router-dom"
import { VscSearch, VscSignOut } from 'react-icons/vsc'
import { IoAddCircleOutline } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'

function Navbar() {
  return (
    <div className="bg-secondary text-black h-screen flex flex-col relative">
      <div className="p-10">
        <Link to={"/"}>
          <h1 className="text-5xl text-yellow">Le Migliore Pizzas</h1>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link to={"/dashboard/orders"} className="text-xl text-white hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2 dashboard-active">
          <VscSearch />
          Verificar pedidos
        </Link>

        <Link to={"/dashboard/orders/add"} className="text-xl text-white hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2">
          <IoAddCircleOutline />
          Registrar pedido
        </Link>

        <Link to={"/dashboard/update"} className="text-xl text-white hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2">
          <FiEdit />
          Modificar pedido
        </Link>

        <Link to={"/dashboard/flavors"} className="text-xl text-white hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2">
          <FiEdit />
          Sabores
        </Link>

        <Link to={"/dashboard/extras"} className="text-xl text-white hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2">
          <FiEdit />
          Adicionais
        </Link>
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <Link to={"/signout"} className="text-xl text-yellow hover:bg-terceary hover:text-black pl-10 py-4 flex items-center gap-2 w-full absolute bottom-0 left-0">
          <VscSignOut />
          Sair
        </Link>
      </div>

    </div>
  )
}

export default Navbar
