import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
 const params = useParams();
 const [individual, setIndividual] = useState({});

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
     <img src = {individual.image} alt = {individual.decription}/>
     <h2>{individual.carMaker}</h2>
   </div>
 );
}