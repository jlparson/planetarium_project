import './PlanatariumContainer.css';
import React, {useState, useEffect} from "react";
import PlanetQuiz from '../components/PlanetQuiz';
// import { ReactComponent as Logo } from "clientassests/download.jpeg";
import mercury from '../assests/Mercury.png';
import venus from '../assests/Venus.png';
import earth from '../assests/Earth.png';
import mars from '../assests/Mars.png';
import jupiter from '../assests/Jupiter.png';
import saturn from '../assests/Saturn.png';
import uranus from '../assests/Uranus.png';
import neptune from '../assests/Neptune.png';
import PlanetsDetails  from '../components/PlanetsDetails';
import '../SpinningPlanets.css'

const PlanetariumContainer = () => {
    const [planets, setPlanets] = useState([]);
    let [planetInfo, setPlanetInfo] = useState(null);

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



    useEffect(() => {
        getPlanets();
        
    }, [])

    // useEffect(() => {
    //     onlyPlanest();

    // }, [])

    


    return(
        
    <>
        <div>
        <h1>Our Planatarium</h1>
        </div>
        <div className="planetContainer">
        <a id="mercury"><img src={mercury} className="mercury" key="mercury" onClick={() => onClickPlanet("mercury")}/></a>
            <a><img src={venus} className="venus" key="venus" onClick={() => onClickPlanet("venus")}/></a>
            <a><img src={earth} className="earth" key="earth" onClick={() => onClickPlanet("earth")}/></a>
            <a><img src={mars} className="mars" key="mars" onClick={() => onClickPlanet("mars")}/></a>
            <a><img src={jupiter} className="jupiter" key="jupiter" onClick={() => onClickPlanet("mars")}/></a>
            <a><img src={saturn} className="saturn" key="saturn" onClick={() => onClickPlanet("saturn")}/></a>
            <a><img src={uranus} className="uranus" key="uranus" onClick={() => onClickPlanet("uranus")}/></a>
            <a><img src={neptune} className="neptune" key="neptune" onClick={() => onClickPlanet("neptune")}/></a>

        </div>
        <div>
            <PlanetsDetails  planetInfo= { planetInfo}  onClickPlanet = {onClickPlanet} />
        </div>
        <div className="quiz-container">
            <PlanetQuiz />
        </div>
    </>    

    )
    
}


export default PlanetariumContainer;