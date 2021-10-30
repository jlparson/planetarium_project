import './PlanatariumContainer.css';
import React, {useState, useEffect} from "react";
// import { ReactComponent as Logo } from "clientassests/download.jpeg";
import mercury from '../assests/Mercury.png';
import venus from '../assests/Venus.png';
import earth from '../assests/Earth.png';
import mars from '../assests/Mars.png';
import jupiter from '../assests/Jupiter.png';
import saturn from '../assests/Saturn.png';
import uranus from '../assests/Uranus.png';
import neptune from '../assests/Neptune.png';


const PlanetariumContainer = () => {
    const [planets, setPlanets] = useState([]);


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
        <h1>Our Planatarium</h1>
            <a><img src={mercury} key="mercury" onClick={() => onClickPlanet("mercury")}/></a>
            <a><img src={venus} key ="earth" onClick={() => onClickPlanet("venus")}/></a>
            <a><img src={earth} key ="earth" onClick={() => onClickPlanet("earth")}/></a>
            <a><img src={mars} key ="earth" onClick={() => onClickPlanet("mars")}/></a>
            <a><img src={jupiter} key ="earth" onClick={() => onClickPlanet("jupiter")}/></a>
            <a><img src={saturn} key ="earth" onClick={() => onClickPlanet("saturn")}/></a>
            <a><img src={uranus} key ="earth" onClick={() => onClickPlanet("uranus")}/></a>
            <a><img src={neptune} key ="earth" onClick={() => onClickPlanet("neptune")}/></a>

        
        

        {/* <PlanetsDetails planets={planets} /> */}
        </div>
    )
    
}


export default PlanetariumContainer;