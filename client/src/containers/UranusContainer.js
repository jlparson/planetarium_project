import '../SpinningPlanets.css'
import space from '../assests/space.png';
import Navbar from '../components/Navbar';




const Uranus = () => {
  


    return (
        <>
           
        
            <div className="pageContainer">
                <div className="texth2"><h2>This is Uranus</h2></div>
                    <div className= "Parent">
                        <div className="singlePlanetContainer">
                            <a className="Uranus2" key="Uranus2" ></a>
                        </div>



                        <div className="text">
                            <p>Uranus is the seventh planet from the Sun. 
                            Its name is a reference to the Greek god of the sky,
                             Uranus, who, according to Greek mythology, 
                             was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).
                              It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. 
                              Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ 
                              from that of the larger gas giants Jupiter and Saturn. 
                            </p>
                        </div>
                    </div>    
                </div>
        </>
    );
};

export default Uranus;