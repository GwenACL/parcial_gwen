import Individual from "./Individual";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function List() {
 const [elements, setElements] = useState([]);
 useEffect(() => {
   const URL =
     "https://github.com/GwenACL/WebUniandes/blob/main/datos.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setElements(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de elementos</h2>
     <hr></hr>
     <Row>
       {elements.map((element) => (
         <Col key={element.id}>
           <Individual element={element} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default List;