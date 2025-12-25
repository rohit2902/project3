import React from 'react'
import NavBar from './Compoment/NavBar'
import Main from './Page/Main'
import Page2 from './Page/Page2'

const App = () => {
  return (
    <>
    <div className='main h-screen w-full bg-black px-8'>
      <NavBar />
      <Main />
    </div>
    <Page2 />
    </>
  )
}

export default App
