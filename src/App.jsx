
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

function App() {
  const nav = useNavigate();

  const onClickButton = ()=>{
    nav('/new');
  }
  return (
    <>
    <div>
      <img src={emotion1} alt="" />
      <img src={emotion2} alt="" />
      <img src={emotion3} alt="" />
      <img src={emotion4} alt="" />
      <img src={emotion5} alt="" />
    </div>
    <div>
      <Link to={'/'}>Home</Link>s
      <Link to={'/new'}>New</Link>
      <Link to={'/diary'}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New 페이지로 이동</button>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
