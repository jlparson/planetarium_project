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

    

    // const getPlanets = function() {
    //     const mercuryData = fetch('https://api.le-systeme-solaire.net/rest/bodies/mercury').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const venusData = fetch('https://api.le-systeme-solaire.net/rest/bodies/venus').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const earthData = fetch('https://api.le-systeme-solaire.net/rest/bodies/earth').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const marsData = fetch('https://api.le-systeme-solaire.net/rest/bodies/mars').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const jupiterData = fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const saturnData = fetch('https://api.le-systeme-solaire.net/rest/bodies/saturn').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const uranusData = fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
    //     const neptuneData = fetch('https://api.le-systeme-solaire.net/rest/bodies/neptune').then((res) => {
    //         newPlanets = [...planets]
    //         newPlanets.push(res)
    //         setPlanets(newPlanets)
    //     })
        
    //     // allFetches = []
    //     allFetches.push(mercuryData)
    //     allFetches.push(venusData)
    //     allFetches.push(earthData)
    //     allFetches.push(marsData)
    //     allFetches.push(jupiterData)
    //     allFetches.push(saturnData)
    //     allFetches.push(uranusData)
    //     allFetches.push(neptuneData)
    //     Promise.all(allFetches).then(res => res.json())

    // }
    // console.log(planets.englishName);

    return(
        <div>
        <a>
        <img src={planet} class="rotate"/></a>
        <h1>hello</h1>
        
        </div>
    )

}


export default PlanetariumContainer;