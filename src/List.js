import Individual from "./Individual";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function List() {
 const [elements, setElements] = useState([]);
 useEffect(() => {
  const URL =
    "https://raw.githubusercontent.com/GwenACL/WebUniandes/main/datos.json";
  fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      const elementsWithIds = data.map((element, index) => ({
        ...element,
        id: index + 1
      }));
      
      setElements(elementsWithIds);
    });
}, []);

 

 return (
   <div className="container">
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