import { useState } from 'react'
import data from './fixtures/cardsData.json'

import './App.css'
import Card from './components/Card'
import LikeBar from './components/LikeBar'

function App() {

  return (
    <>
      <LikeBar />
      <div className='flexDiv'>
        {
          data.map(object => { return <Card key={object.id} {...object} /> })
        }
      </div>
      
      
    </>
  )
}

export default App
