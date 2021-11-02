import '../SpinningPlanets.css'
import space from '../assests/space.png';
import Navbar from '../components/Navbar';




const Venus = () => {
  


    return (
        <>
           
        
            <div className="pageContainer">
                <div className="PlanetName"><h2>This is Venus</h2></div>
                    <div className= "Parent">
                        <div className="singlePlanetContainer">
                            <a className="Venus2" key="Venus2" ></a>
                        </div>



                        <div className="PlanetInfotext">
                            <p>Venus is the second planet from the Sun.
                             It is named after the Roman goddess of love and beauty.
                            As the brightest natural object in Earth's night sky after the Moon,
                            Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.
                            Venus lies within Earth's orbit, and so never appears to venture far from the Sun,
                             either setting in the west just after dusk or rising in the east a little while before dawn.
                            </p>
                        </div>
                    </div>    
                </div>
        </>
    );
};

export default Venus;