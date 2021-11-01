import React from "react";
import "../App.css"
import ReactTooltip from 'react-tooltip';


const  PlanetsDetails  = ({planetInfo}) => {

    

    if (!planetInfo){
         return (null)
    }



    
    return(
        <div className="planetInfo">
            <h3>Name: {planetInfo.englishName}</h3>
            <p data-tip="An invisible force that pulls objects toward each other. Earth's gravity is what keeps you on the ground and what makes things fall.">Gravity: {planetInfo.gravity}m/s²</p>
            <p data-tip="How compact the Planet is" >Density: {planetInfo.density}g/cm³</p>
            <a href={`/${planetInfo.englishName}`}>Click here for more info about {planetInfo.englishName}</a>
            <img src={planetInfo.id} alt="Earth" />
            <ReactTooltip />
       
             
        </div>
    )
}
export default PlanetsDetails;