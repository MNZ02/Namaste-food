import Header from "./components/Header"
import Body from "./components/Body"
import Menu from "./components/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
