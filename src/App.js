import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import List from "./List";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/parts" element = {<List/>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;