import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Random from './pages/Random'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/random'  element={<Random />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App