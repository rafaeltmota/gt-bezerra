import './App.css'
import Greentings from './components/Greentings'
import { Header } from './components/Header'

const user = window.prompt("Qual o seu nome?") || "Visitante";

function App() {

  return (
    <>
      <Header/>
      <Greentings nome={user}/>      
    </>
  )
}

export default App
