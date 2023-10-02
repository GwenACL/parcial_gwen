import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";

export default function Detail(props) {
 const params = useParams();

// para testos sin coneccion 

//  const indivuals = [{
//   "carMaker": "BMW",
//   "carModel": "M3",
//   "carYear": 1995,
//   "partName": "Golden Lipfern",
//   "description": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
//   "image": "http://dummyimage.com/300x200.png/dddddd/000000",
//   "available": false,
//   "price": "$344.68"
// }, {
//   "carMaker": "Bentley",
//   "carModel": "Continental",
//   "carYear": 2012,
//   "partName": "Calamus",
//   "description": "donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
//   "image": "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
//   "available": false,
//   "price": "$477.52"
// }, {
//   "carMaker": "Pontiac",
//   "carModel": "Grand Am",
//   "carYear": 1999,
//   "partName": "Scoliciosporum Lichen",
//   "description": "accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
//   "image": "http://dummyimage.com/300x200.png/cc0000/ffffff",
//   "available": true,
//   "price": "$182.37"
// }, {
//   "carMaker": "Mitsubishi",
//   "carModel": "Starion",
//   "carYear": 1984,
//   "partName": "Desertbeauty",
//   "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
//   "image": "http://dummyimage.com/300x200.png/dddddd/000000",
//   "available": false,
//   "price": "$449.46"
// }, {
//   "carMaker": "Acura",
//   "carModel": "TL",
//   "carYear": 2004,
//   "partName": "Apple Blossom",
//   "description": "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
//   "image": "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
//   "available": true,
//   "price": "$217.91"
// }, {
//   "carMaker": "Honda",
//   "carModel": "Accord",
//   "carYear": 2001,
//   "partName": "Tennessee Pondweed",
//   "description": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
//   "image": "http://dummyimage.com/300x200.png/cc0000/ffffff",
//   "available": false,
//   "price": "$125.67"
// }, {
//   "carMaker": "Hyundai",
//   "carModel": "Santa Fe",
//   "carYear": 2005,
//   "partName": "Slender Meadow Foxtail",
//   "description": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
//   "image": "http://dummyimage.com/300x200.png/dddddd/000000",
//   "available": true,
//   "price": "$176.05"
// }, {
//   "carMaker": "Toyota",
//   "carModel": "Corolla",
//   "carYear": 2009,
//   "partName": "Veiny Skullcap",
//   "description": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque",
//   "image": "http://dummyimage.com/300x200.png/dddddd/000000",
//   "available": false,
//   "price": "$265.55"
// }, {
//   "carMaker": "Chrysler",
//   "carModel": "Prowler",
//   "carYear": 2002,
//   "partName": "Leadwort",
//   "description": "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
//   "image": "http://dummyimage.com/300x200.png/dddddd/000000",
//   "available": false,
//   "price": "$467.78"
// }, {
//   "carMaker": "Bentley",
//   "carModel": "Continental Flying Spur",
//   "carYear": 2012,
//   "partName": "Velvet Lupine",
//   "description": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
//   "image": "http://dummyimage.com/300x200.png/cc0000/ffffff",
//   "available": true,
//   "price": "$347.84"
// }];

//  const individuals2 = indivuals.map((element, index) => ({
//             ...element,
//              id: index + 1
//           }));
//   console.log(individuals2);

//   const [individual,setIndividual] = useState(individuals2.find((i) => i.id === Number(params.id)) || {});
//   console.log(individual);

const [individual, setIndividual] = useState([])
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
        
        const indiv = elementsWithIds.find((i) => i.id === Number(params.id))
        setIndividual(indiv || {});
      });
  }, [params.id]);

  

    return (
      <div>
        <h1>{individual.carName}</h1>
        <Row>
          <Col >
            <img src={individual.image} alt={individual.description} />
          </Col>
          <Col > 
            <div className="d-flex align-items-center">
              <p><FormattedMessage id = "D-carMaker"></FormattedMessage></p>
              {props.role === true ? <input value = {individual.carMaker}></input> : <p>{individual.carMaker}</p>}
            </div>
            <div className="d-flex align-items-center">
              <p><FormattedMessage id = "D-carModel"></FormattedMessage></p>
              {props.role === true ? <input value = {`${individual.carMaker} ${individual.carModel}`} ></input> : <p>{individual.carMaker} {individual.carModel}</p>}
            </div>
            <div className="d-flex align-items-center">
              <p><FormattedMessage id = "D-Year"></FormattedMessage></p>
              {props.role === true ? <input value = {individual.carYear}></input> : <p>{individual.carYear}</p>}
            </div>
            <div className="d-flex align-items-center">
              <p><FormattedMessage id = "D-available"></FormattedMessage></p>
              {props.role === true ? <input value = {individual.available === true ? "Yes" : "False"}></input> : <p>{individual.available === true ? "Yes" : "False"}</p>}
            </div>
            <div className="d-flex align-items-center">
              <p><FormattedMessage id = "D-price"></FormattedMessage></p>
              {props.role === true ? <input value = {individual.price}></input> : <p>{individual.price}</p>}
            </div>
              <p><FormattedMessage id = "D-description"></FormattedMessage></p>
              {props.role === true ? <input value = {individual.description}></input> : <p>{individual.description}</p>}
          </Col>
        </Row>
      </div>
    );
  }
  