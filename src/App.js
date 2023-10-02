import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./List";
import Login from "./Login";
import Detail from "./Detail";
import { useState } from "react";

function App(props) {

  const [role, setRole] = useState(true);
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login setRole = {setRole} userLocale = {props.userLocale} setUserLocale = {props.setUserLocale} />} />
         <Route path="/login" element={<Login setRole = {setRole} userLocale = {props.userLocale} setUserLocale = {props.setUserLocale} />} />
         <Route path="/parts" element = {<List/>} />
         <Route path="/parts/:id" element = {< Detail role = {role}/>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;