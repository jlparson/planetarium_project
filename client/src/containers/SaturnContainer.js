import '../SpinningPlanets.css'
import space from '../assests/space.png';
import Navbar from '../components/Navbar';
import saturn from '../assests/Saturn.png';
import PlanetQuiz from '../components/PlanetQuiz';




const Saturn = ({planet}) => {
  


    return (
        <>
           
        
            <div className="pageContainer">
                <div className="texth2"><h2>This is Saturn</h2></div>
                    <div className= "Parent">
                        <div className="singlePlanetContainer">
                            <a className="saturn" key="saturn" ></a>
                        </div>



                        <div className="text">
                            <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.
                             It is a gas giant with an average radius of about nine and a half times that of Earth.
                             It only has one-eighth the average density of Earth; however, with its larger volume,
                              Saturn is over 95 times more massive
                            </p>
                        </div>

                        <img src={saturn} className="saturn" key="saturn" />
                    </div>    
                </div>
        </>
    );
};

export default Saturn;