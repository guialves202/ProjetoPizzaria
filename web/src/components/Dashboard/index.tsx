import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Outlet />
    </div>
  )
}
