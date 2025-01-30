
import './App.css'
import Editor from './components/Editor'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import ShowFiles from './pages/ShowFiles'
import FileContent from './pages/FileContent'
import UploadFile from './pages/UploadFile'

function App() {

  return (
    <>
    <Layout>
    <Routes>
        <Route path='/' element={<Editor />} />
        <Route path='/files' element={<ShowFiles/>} />
        <Route path='/getfile/:id' element={<FileContent/>} />
        <Route path='/upload' element={<UploadFile/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
