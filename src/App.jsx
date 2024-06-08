
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getemotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'
import Edit from './pages/Edit'
import { useReducer, useRef, createContext } from 'react'

const mockData = [
  {
    id : 1,
    createDate : new Date().getTime(),
    emotionId : 1,
    content : '1번 일기 내용'
  },
  {
    id : 2,
    createDate : new Date().getTime(),
    emotionId : 2,
    content : '2번 일기 내용'
  },
  {
    id : 3,
    createDate : new Date().getTime(),
    emotionId : 3,
    content : '3번 일기 내용'
  }
]

function reducer(state, action){
  switch(action.type){
    case "CREATE" : return [action.data,...state]
    case "UPDATE" : return state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item)
    case "DELETE" : return state.filter((item)=> String(item.id) !== String(action.id))
    default : return state;
  }
}

const DiaryStateContext = createContext();

function App() {
const [data, dispatch] = useReducer(reducer, mockData);
const idRef = useRef(4);
const onCreate = (createdDate, emotionId, content)=>{
  dispatch({
    type : 'CREATE',
    data : {
      id : idRef.current++,
      createdDate,
      emotionId,
      content,
    }
    })
  }

  const onUpdate = (id, createdDate, emtionId, content)=>{
      dispatch({
      type : "UPDATE",
      data : {
        id,
        createdDate,
        emtionId,
        content,
      }
      })
  }

    const onDelete = (id)=>{
      dispatch({
        type : 'DELETE',
        id,
      })
    }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
