import AddFlavor from "./AddFlavor"
import ListFlavors from "./ListFlavors"

function Flavor() {
  return (
    <div className="flex flex-col gap-10 items-center p-6">
      <ListFlavors />
      <AddFlavor />
    </div>
  )
}

export default Flavor
