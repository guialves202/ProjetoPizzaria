import AddExtra from "./AddExtra"
import ListExtras from "./ListExtra"

function Extra() {
  return (
    <div className="flex flex-col gap-10 items-center p-6">
      <ListExtras />
      <AddExtra />
    </div>
  )
}

export default Extra
