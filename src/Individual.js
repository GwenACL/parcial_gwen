import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Individual(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.element.foto}
       alt={props.element.descripcion}
     />
     <Card.Body>
       <Card.Title>
         Test
       </Card.Title>
       <Card.Text>{props.element.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Individual;