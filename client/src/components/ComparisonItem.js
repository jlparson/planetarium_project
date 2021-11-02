import React from "react";
import ComparisonContainer from "../containers/ComparisonContainer";


const ComparisonItem = ({planetInfo}) => {
    if (!planetInfo){
        return (null)
    }
    

    
    return (
        <div>
        <img src={require(`../assests/${planetInfo.englishName}.png`).default} />   


            <h3>{planetInfo.englishName}</h3>
            <img src="../assests/Venus.png" />
            <h3>{planetInfo.density}</h3>
            //greatest distance between the planet and the sun */}
            <h3>{planetInfo.aphelion}</h3> 
            
            
            
        </div>
        
    )




}

export default ComparisonItem;


