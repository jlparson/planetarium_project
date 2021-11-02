import './ComparisonContainer.css';
import React, {useState, useEffect} from "react";
import ComparisonItem from '../components/ComparisonItem';

const ComparisonContainer = ()=> {
    const [planets, setPlanets] = useState([]);
    let [planetInfo, setPlanetInfo] = useState(null);
    let [planetInfo2, setPlanetInfo2] = useState(null);

    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(res => res.json())
        .then(planets => {
            setPlanets(planets.bodies.filter(planet => planet.isPlanet))});
        
    }
    
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
    


    return(
        <div className="itemsForComparison">
            <div className="firstComparisonItem">
                <div>
                                        

                    <ul>
                        
                        <li onClick={() => onClickPlanet("mercury")}>Mercury</li>
                        <li onClick={() => onClickPlanet("venus")}>Venus</li>
                        <li onClick={() => onClickPlanet("earth")}>Earth</li>
                        <li onClick={() => onClickPlanet("mars")}>Mars</li>
                    </ul> 
                </div>
                <ComparisonItem  planetInfo= {planetInfo}  />
                <div>
                    <ul>
                        
                        <li onClick={() => onClickPlanet2("mercury")}>Mercury</li>
                        <li onClick={() => onClickPlanet2("venus")}>Venus</li>
                        <li onClick={() => onClickPlanet2("earth")}>Earth</li>
                        <li onClick={() => onClickPlanet2("mars")}>Mars</li>
                    </ul> 
                </div>
                <ComparisonItem  planetInfo= {planetInfo2}   />
               
            
           
            </div>
        </div>
        
        )
    
}

export default ComparisonContainer;