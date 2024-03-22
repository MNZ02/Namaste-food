import Header from "./components/Header"
import Body from "./components/Body"
import Menu from "./components/Menu"
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/res/:resId" element={<Menu />} />
          <Route path="/about" element={<About name={'Namaste React'}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
