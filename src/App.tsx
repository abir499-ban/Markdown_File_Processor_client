
import './App.css'
import Editor from './components/Editor'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Layout>
        <p className='text-4xl p-3 font-serif'>Write your Markdown Content Here!!</p>
        <Editor/>
      </Layout>
    </>
  )
}

export default App
