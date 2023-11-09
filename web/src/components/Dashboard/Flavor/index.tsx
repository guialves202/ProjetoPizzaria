import { AddFlavor } from "./AddFlavor"
import { ListFlavors } from "./ListFlavors"

export function Flavor() {
  return (
    <div className="flex flex-col gap-10 items-center p-6 h-[100vh]">
      <ListFlavors />
      <AddFlavor />
    </div>
  )
}
