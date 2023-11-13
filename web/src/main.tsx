import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Dashboard } from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Flavor } from './components/Dashboard/Flavor/index.tsx'
import { Orders } from './components/Dashboard/Orders.tsx'
import { AddOrder } from './components/Dashboard/AddOrder/AddOrder.tsx'
import { Extra } from './components/Dashboard/Extra/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'flavors',
        element: <Flavor />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'orders/add',
        element: <AddOrder />
      },
      {
        path: 'extras',
        element: <Extra />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
