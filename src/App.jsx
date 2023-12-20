import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {


  return (
    <>
      <Navigation/>
        <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*Dan de about me, dan over werkervaring. Begon als zorgboer, daarna kindercoaching en coaching, geven van opleiding*/}
        {/*  foto slider maken waarbij foto's laat zien van mij voor een hele zaal en van mijn carriere*/}
        {/*  dan vertellen over waarom de switch maken naar iets anders */}
      </Routes>
        </main>
    </>
  )
}

export default App
