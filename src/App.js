import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./List";
import Login from "./Login";
import Detail from "./Detail";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/parts" element = {<List/>} />
         <Route path="/parts/:id" element = {< Detail/>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;