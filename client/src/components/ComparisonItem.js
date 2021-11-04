import './ComparisonItem.css';
import React from "react";
import ComparisonContainer from "../containers/ComparisonContainer";


const ComparisonItem = ({planetInfo}) => {
    if (!planetInfo){
        return (null)
    }
    
    // const numOfMoons = planetInfo.moons.length; 
    // if( numOfMoons=null ){
    //     return 0;
    // }else{
    //     return numOfMoons
    // }  
    
    
    
    return (
        <div className="comparisonInfo">
            <img src={require(`../assests/${planetInfo.englishName}.png`).default} />   
            <h1>{planetInfo.englishName}</h1>
            <h4>Density of {planetInfo.englishName} measured in grams per cubic centimeter:</h4>
            <p>{planetInfo.density} g/cm³</p>
            <h4>Distance from {planetInfo.englishName} to the sun:</h4>
            <p>{planetInfo.aphelion} km</p> 
            <h4>Mean radius of {planetInfo.englishName}:</h4>
            <p>{planetInfo.meanRadius} km</p> 
            <h4>Average temperature of {planetInfo.englishName} in degrees Kelvin :</h4>
            <p>{planetInfo.avgTemp}</p> 
            {/* <h4>Number of moons {planetInfo.englishName} has:</h4>
            <p>{numOfMoons}</p> */}
            
        </div>
        
    )




}

export default ComparisonItem;


