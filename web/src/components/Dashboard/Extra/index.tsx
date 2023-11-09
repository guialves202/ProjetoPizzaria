import { AddExtra } from "./AddExtra"
import { ListExtras } from "./ListExtra"

export function Extra() {
  return (
    <div className="flex flex-col gap-10 items-center p-6 h-[100vh]">
      <ListExtras />
      <AddExtra />
    </div>
  )
}
