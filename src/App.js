import { BrowserRouter, Routes , Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/h" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;