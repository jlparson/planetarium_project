import '../SpinningPlanets.css'
import space from '../assests/space.png';
import Navbar from '../components/Navbar';




const Mars = () => {
  


    return (
        <>
           
        
            <div className="pageContainer">
                <div className="PlanetName"><h2>This is Mars</h2></div>
                    <div className= "Parent">
                        <div className="singlePlanetContainer">
                            <a className="Mars2" key="Mars2" ></a>
                        </div>



                        <div className="PlanetInfotext">
                            <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System,
                             being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".
                             The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance (as shown),
                              that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, 
                              with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                            </p>
                        </div>
                    </div>    
                </div>
        </>
    );
};

export default Mars;