import './ComparisonContainer.css';
import React, {useState, useEffect} from "react";
import ComparisonItem from '../components/ComparisonItem';

const ComparisonContainer = ()=> {
    const [planets, setPlanets] = useState([]);
    const [orderedPlanets, setOrderedPlanets] = useState([]);

    let [planetInfo, setPlanetInfo] = useState(null);
    let [planetInfo2, setPlanetInfo2] = useState(null);
    

    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(res => res.json())
        .then(planets => {
            setPlanets(planets.bodies.filter(planet => (planet.isPlanet && !planet.englishName.startsWith(1) && !planet.englishName.startsWith("P"))))});    
    }

    console.log(planets);

   
    
    const onClickPlanet = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(planetInfo => setPlanetInfo(planetInfo))   
    }
    const onClickPlanet2 = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(planetInfo => setPlanetInfo2(planetInfo))   
    }

 

    useEffect(() => {
        getPlanets();   
    }, [])
    
    

    const planetOptions = planets.map((planet) => {
        return (
            <li onClick={() => onClickPlanet(planet.englishName)}>{planet.englishName}</li>
        )
    })
    const planetOptions2 = planets.map((planet) => {
        return (
            <li onClick={() => onClickPlanet2(planet.englishName)}>{planet.englishName}</li>
        )
    })

  


    return(
        <div className="comparisonContainerMainDiv">
        <h1>Pick 2 planets to compare their statistics!</h1>
            <div className="comparisonItemParent">
            
                <div className="firstComparisonItem">
                {/* <h2>List 1</h2> */}
                    <ul>
                        {planetOptions} 
                    </ul> 
                    
                </div>
                <ComparisonItem  planetInfo= {planetInfo}  />
                {/* <h1 className="vs">VS</h1> */}
                <div className="secondComparisonItem">
                    <ul>
                        {planetOptions2} 
                    </ul> 
                    
                </div> 
                <ComparisonItem  planetInfo= {planetInfo2}/>
               
            
           
            </div>
        </div>
        
        )
    
}

export default ComparisonContainer;