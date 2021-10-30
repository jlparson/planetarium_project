import './PlanatariumContainer.css';
import React, {useState, useEffect} from "react";
// import { ReactComponent as Logo } from "clientassests/download.jpeg";
import planet from '../assests/download.jpeg';
import space from '../assests/space.png'


const PlanetariumContainer = () => {
    const [planets, setPlanets] = useState([]);
    // const [newPlanets, setNewPlanets] = useState([]);
    // const [allFetches, setAllFetchs] = useState([]);
   const [onlyPlanets, setOnlyPlanets] = useState([])

    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(res => res.json())
        .then(planets => {
            setPlanets(planets.bodies.filter(planet => planet.isPlanet))});
        
    }

    
    const onClickPlanet = function (id){
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then(res => res.json())
        .then(res => console.log(res))
    }
     


    useEffect(() => {
        getPlanets();
        
    }, [])

    // useEffect(() => {
    //     onlyPlanest();

    // }, [])

    


    return(
        

        <div>
        <a>
        <img src={planet} class="rotate" key ="earth" onHover={() => onClickPlanet("earth")}/></a>
        <h1>hello</h1>
        

        {/* <PlanetsDetails planets={planets} /> */}
        </div>
    )
    
}


export default PlanetariumContainer;