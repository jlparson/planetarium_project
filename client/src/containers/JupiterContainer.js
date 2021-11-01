import jupiter from '../assests/Jupiter.png';
import '../SpinningPlanets.css'

const Jupiter = () => {

    return (
        <div className="pageContainer">
                        <h1>This is Jupiter</h1>
            <div className= "Parent">
                
                        <div className="jupiter2" key="jupiter2" ></div>
                
                
                        <p className="text">Jupiter is the fifth planet from the Sun and the largest in the Solar System.
                         It is a gas giant with a mass more than two and a half times that of all the other
                         planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.
                         Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus.
                         It has been observed since pre-historic times and is named after the Roman god Jupiter,
                         the king of the gods, because of its observed size.
                        </p>
                
            </div>
        </div>
    );
};

export default Jupiter;