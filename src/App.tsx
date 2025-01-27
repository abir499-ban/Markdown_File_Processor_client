
import './App.css'
import Editor from './components/Editor'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import ShowFiles from './pages/ShowFiles'
import FileContent from './pages/fileContent'

function App() {

  return (
    <>
    <Layout>
    <Routes>
        <Route path='/' element={<Editor />} />
        <Route path='/files' element={<ShowFiles/>} />
        <Route path='/getfile/:id' element={<FileContent/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
