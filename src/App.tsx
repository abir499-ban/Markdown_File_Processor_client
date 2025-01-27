
import './App.css'
import Editor from './components/Editor'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import ShowFiles from './pages/ShowFiles'

function App() {

  return (
    <>
    <Layout>
    <Routes>
        <Route path='/' element={<Editor />} />
        <Route path='/files' element={<ShowFiles/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
