import '../SpinningPlanets.css'
import space from '../assests/space.png';
import Navbar from '../components/Navbar';




const Mercury = () => {
  


    return (
        <>
           
        
            <div className="pageContainer">
                <div className="texth2"><h2>This is Mercury</h2></div>
                    <div className= "Parent">
                        <div className="singlePlanetContainer">
                            <a className="Mercury2" key="Mercury2" ></a>
                        </div>



                        <div className="text">
                            <p>Mercury is the smallest planet in the Solar System and the closest to the Sun.
                            Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
                            It is named after the Roman god Mercurius, god of commerce, messenger of the gods,
                            and mediator between gods and mortals, corresponding to the Greek god Hermes . 
                            </p>
                        </div>
                    </div>    
                </div>
        </>
    );
};

export default Mercury;