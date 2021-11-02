import './ComparisonItem.css';
import React from "react";
import ComparisonContainer from "../containers/ComparisonContainer";


const ComparisonItem = ({planetInfo}) => {
    if (!planetInfo){
        return (null)
    }
    

    
    return (
        <div className="comparisonInfo">
            <img src={require(`../assests/${planetInfo.englishName}.png`).default} />   
            <h1>{planetInfo.englishName}</h1>
            <h3>{planetInfo.density}</h3>
            <h2>Distance from Planet to the sun:</h2>
            <h3>{planetInfo.aphelion}</h3> 
            
            
        </div>
        
    )




}

export default ComparisonItem;


