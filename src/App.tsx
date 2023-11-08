
import Header from './components/Header'
import Navigation from './components/Navigation'
import Resume from './components/Resume'
import Content from './components/main/Content'

import './App.css'


function App() {

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <Resume />

      <main>
      <Content />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  )
}

export default App
