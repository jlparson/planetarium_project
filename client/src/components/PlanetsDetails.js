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
       
             
        </div>
    )
}
export default PlanetsDetails ;