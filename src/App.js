import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, NavBar, SearchResults, Productpage, Checkout } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/productpage" element={<Productpage />} />
        <Route exact path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  )
}


export default App;