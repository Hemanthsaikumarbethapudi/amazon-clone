import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, NavBar } from "./components"
  ;

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  )
}


export default App;