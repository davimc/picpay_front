
import Header from './components/Header'
import Navigation from './components/Navigation'
import Resume from './components/Resume'

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <Header/>
      <Resume />    

      <main className='container'>
      </main>     
      <footer>
        <Navigation/>  
      </footer>
    </div>
  )
}

export default App
