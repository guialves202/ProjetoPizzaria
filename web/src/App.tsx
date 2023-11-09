import './App.css'
import { Header } from './components/default/Header'
import { Main } from './components/Home/Main'
import { Contact } from './components/default/Contact'
import { BestSeller } from './components/Home/BestSellers'
import { Menu } from './components/Home/Menu'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <BestSeller />
      <Menu />
      <Contact />
    </>
  )
}
