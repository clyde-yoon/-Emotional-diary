
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getemotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'


function App() {
  const nav = useNavigate();

  const onClickButton = ()=>{
    nav('/new');
  }
  return (
    <>
    <Header
    title={'Header'}
    leftChild={<Button text={'Left'}/>}
    rightChild={<Button text={'right'}/>}
    />
    <Button text={2222} type={'POSITIVE'} onClick={onclick}/>
    <Button text={2222} type={'NEGATIVE'} onClick={onclick}/>
    <Button text={2222}  onClick={onclick}/>


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
