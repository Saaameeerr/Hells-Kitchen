import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Restaraunt/Header'
import Footer from './components/Restaraunt/Footer'
import "bootstrap-icons/font/bootstrap-icons.css"
import Routing from './components/Restaraunt/Routing'
import Counter from './Counter'
import { createContext, useState } from 'react'

export const loginStatus = createContext()

function App() {
  const [login, setLogin] = useState(false)
  return (
    <section className=''>
      <loginStatus.Provider value={[login, setLogin]}>
      <Header/>
      <Routing/>
      <Footer/>
      </loginStatus.Provider>
    </section>
  )
}

export default App
