import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Dashboard
