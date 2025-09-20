import { Routes,Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import { MovieProvider  } from './context/MovieContext'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'

function App() {

    return(
      <MovieProvider>
        <NavBar />
        <main className='main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourite" element={<Favourite/>} />
        </Routes>
      </main>
      </MovieProvider>  
    )
}

export default App
