import './PlanatariumContainer.css';
import React, {useState, useEffect} from "react";
// import { ReactComponent as Logo } from "clientassests/download.jpeg";
import planet from '../assests/download.jpeg';


const PlanetariumContainer = () => {
    const [planets, setPlanets] = useState([]);
    // const [newPlanets, setNewPlanets] = useState([]);
    // const [allFetches, setAllFetchs] = useState([]);

    const getPlanets = function(){
        fetch('https://api.le-systeme-solaire.net/rest/bodies')
        .then(res => res.json())
        .then(planets => setPlanets(planets));
    }

    useEffect(() => {
        getPlanets();
        
    }, [])

    


    return(
        <div>
        <a>
        <img src={planet} class="rotate"/></a>
        <h1>hello</h1>
        
        </div>
    )

}


export default PlanetariumContainer;