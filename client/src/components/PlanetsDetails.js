import React from "react";
import "../App.css"

const  PlanetsDetails  = ({planetInfo}) => {

    

    if (!planetInfo){
         return (null)
    }



    
    return(
        <div className="planetInfo">
            <h3>Name:{planetInfo.englishName}</h3>
            <p>Gravity:{planetInfo.gravity} </p>
            <p>Density:{planetInfo.density} </p>
            <a href={`/${planetInfo.englishName}`}>Click here for more info about {planetInfo.englishName}</a>
       
             
        </div>
    )
}
export default PlanetsDetails;