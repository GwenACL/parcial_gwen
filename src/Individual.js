import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Individual(props) {
 return (
  <div>
  <Link to={`/parts/${props.element.id}`}>
    <Card style={{ width: "300px", height: "400px" }} className="mb-3">
      <Card.Img
        style={{ width : "300px", height: "200px" }}
        variant="top"
        src={props.element.image}
        alt={props.element.description}
      />
      <Card.Body>
        <Card.Title>
          {props.element.carModel} {props.element.partName} {props.element.carMaker}
        </Card.Title>
        <Card.Text>{props.element.price} Euros - {props.element.carYear} </Card.Text>
      </Card.Body>
    </Card>
  </Link>
   </div>
 );
}

export default Individual;