
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import { Routes, Route } from 'react-router-dom'
function App() {
 //1. "/" 모든 일기를 조회하는 홈페이지
 //2. "/new" 새로운 일기를 작성하는 New페이지
 //3. "/diary" 일기를 상세히 조회하는 Diary 페이지

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
    </Routes>
  )
}

export default App
