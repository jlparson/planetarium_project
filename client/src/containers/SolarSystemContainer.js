import React, { useEffect} from 'react';
import './SolarSystemContainer.css'
// import '../App.css'
import mercury from '../assests/Mercury.png';
import venus from '../assests/Venus.png';
import earth from '../assests/Earth.png';
import mars from '../assests/Mars.png';
import jupiter from '../assests/Jupiter.png';
import saturn from '../assests/Saturn.png';
import uranus from '../assests/Uranus.png';
import neptune from '../assests/Neptune.png';
import sun from '../assests/Sun.jpg';
import moon from '../assests/Moon.jpg';
import asteroid from '../assests/Asteroid-belt.png';


const SolarSystem = () => {

    // const [solarSystem, setSolarSystem] = useState(null);

    const system = () => {

    const planets = document.querySelectorAll('.planet')
    const p_radii = [22,33,50,70,112,138,165,190]
    let p_radians = new Array(8).fill(0)
    const p_velocities = [1.607, 1.174,1,0.802, 0.434, 0.323, 0.228, 0.182]

    // const moon = document.querySelector('#moon')
    const m_radius = 8
    let m_radians = 0
    const m_velocity = 10

    const p_orbits = document.querySelectorAll('.p-orbit')
    const m_orbit = document.querySelector('#m-orbit')

    p_orbits.forEach((p_orbit, index)=>{
    p_orbit.style.height = `${p_radii[index]}vmin`
    p_orbit.style.width = `${p_radii[index]}vmin`
    })

    setInterval( ()=> {
    planets.forEach((planet, index)=>{
        planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
        planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
        p_radians[index] += p_velocities[index] * 0.02
        })

        // moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius )}vmin`
        // moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius )}vmin`
        // m_radians += m_velocity * 0.02

        // m_orbit.style.left = `${earthX()}vmin`
        // m_orbit.style.top = `${earthY()}vmin`
    }, 1000/60)

    function earthX(){
        return Number( planets[2].style.left.split('vmin')[0] )
    }

    function earthY(){
        return Number( planets[2].style.top.split('vmin')[0] )
    }
    }

    useEffect(() => {
        system();
        
    }, [])
    return (
        <>
        <div className="body">
        <h1>Solar System</h1>

        <img class="object" src={sun} alt="" id="sun"/>
        <img class="object planet" src={mercury} alt="" id="mercury"/>
        <img class="object planet" src={venus} alt="" id="venus"/>
        <img class="object planet" src={earth} alt="" id="earth"/>
        <img class="object planet" src={mars} alt="" id="mars"/>
        <img class="object planet" src={jupiter} alt="" id="jupiter"/>
        <img class="object planet" src={saturn} alt="" id="saturn"/>
        <img class="object planet" src={uranus} alt="" id="uranus"/>
        <img class="object planet" src={neptune} alt="" id="neptune"/>
        <div class="object" id="moon"></div>

        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object p-orbit"></div>
        <div class="object" id="m-orbit"></div>

        <img src={asteroid} class="object" alt="" id="belt"></img>
        </div>

        
        </>
    );
};

export default SolarSystem;