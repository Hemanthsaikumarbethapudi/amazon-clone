import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;