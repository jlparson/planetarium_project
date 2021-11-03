import './ComparisonItem.css';
import React from "react";
import ComparisonContainer from "../containers/ComparisonContainer";


const ComparisonItem = ({planetInfo}) => {
    if (!planetInfo){
        return (null)
    }
    
    const numOfMoons = ({planetInfo})=>{
        const num = planetInfo.moons.length();
        return(
            num
        )
    }
    
    
    return (
        <div className="comparisonInfo">
            <img src={require(`../assests/${planetInfo.englishName}.png`).default} />   
            <h1>{planetInfo.englishName}</h1>
            <h4>Density of {planetInfo.englishName} measured in grams per cubic centimeter:</h4>
            <h3>{planetInfo.density} g/cm³</h3>
            <h4>Distance from {planetInfo.englishName} to the sun:</h4>
            <h3>{planetInfo.aphelion} km</h3> 
            <h4>Mean radius of {planetInfo.englishName}:</h4>
            <h3>{planetInfo.meanRadius} km</h3> 
            <h4>Average temperature of {planetInfo.englishName} in degrees Kelvin :</h4>
            <h3>{planetInfo.avgTemp}</h3> 
            
        </div>
        
    )




}

export default ComparisonItem;


