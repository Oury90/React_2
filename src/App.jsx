import react from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {

  return (
    <>
      <header className='max-w-4xl mx-auto py-4'>
        <Header />
      </header>
      <Outlet/>
      <footer>Footer</footer>
    </>
  )
}

export default App
