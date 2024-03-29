import { lazy, Suspense } from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Menu from "./components/Menu"
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./store/store"
const Grocery = lazy(() => import("./components/Grocery"))
function App() {



  return (

    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/res/:resId" element={<Menu />} />
            <Route path="/about" element={<About name={'Namaste React'} />} />
            <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>} />
          </Routes>
        </Router>
      </Provider>

    </>
  )
}

export default App
