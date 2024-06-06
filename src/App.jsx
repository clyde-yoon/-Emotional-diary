
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/Notfound'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/new'}>New</Link>
      <Link to={'/diary'}>Diary</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
