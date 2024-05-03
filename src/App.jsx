
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
      </div>

    </div>
  </BrowserRouter>

  )
}

export default App
