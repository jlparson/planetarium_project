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
            <a><img src={mercury} id="mercury" key="mercury" onClick={() => onClickPlanet("mercury")}/></a>
            <a><img src={venus} id="venus" key="venus" onClick={() => onClickPlanet("venus")}/></a>
            <a><img src={earth} id="earth" key="earth" onClick={() => onClickPlanet("earth")}/></a>
            <a><img src={mars} id="mars" key="mars" onClick={() => onClickPlanet("mars")}/></a>
            <a><img src={jupiter} id="jupiter" key="jupiter" onClick={() => onClickPlanet("jupiter")}/></a>
            <a><img src={saturn} id="saturn" key="saturn" onClick={() => onClickPlanet("saturn")}/></a>
            <a><img src={uranus} id="uranus" key="uranus" onClick={() => onClickPlanet("uranus")}/></a>
            <a><img src={neptune} id="neptune" key="neptune" onClick={() => onClickPlanet("neptune")}/></a>

        
        

        {/* <PlanetsDetails planets={planets} /> */}
        </div>
    )
    
}


export default PlanetariumContainer;