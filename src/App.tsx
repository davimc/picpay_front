
import Header from './components/Header'
import Resume from './components/Resume'
import Content from './components/main/Content'

import './App.css'
import { useState, createContext } from 'react'
import axios from 'axios'


export const TokenContext = createContext<string>('')

function App() {
  
   const [token, setToken] = useState<string>('')

  axios.post('http://localhost:8080/auth/login', {
    login: 'bob@gmail.com',
    password: '123456'
  }).then(function (response) {
    setToken(response.data.token)
  }).catch(function (error) {
    console.log(error)
  })
  // TODO verificar se é um useRef o melhor para esse context
  return (
    <>
       <header>
        <Header />
      </header>
    <TokenContext.Provider value={token}>

      <Resume />
    </TokenContext.Provider>

      <main>
        <Content />
      </main>
      </>
  )
}

export default App
