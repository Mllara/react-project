import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from'./Components/layout/Navbar'
import Footer from './Components/layout/Footer'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>}>
        </Route>
        <Route path="/" element={<Empresa/>}/>
        <Route path='/' element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
