import StudentItem from "../components/AboutStudent";
import { StudentData } from '../data/studentData';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1 className="aboutTitle">The Binary Star Brigade</h1>
            <div className="aboutStudent">
                {StudentData.map((studentItem, key) => {
                    return <StudentItem key={key} image={studentItem.image} fullName={studentItem.fullName} url={studentItem.url}/>
                })}
            </div>
        </div>
    );
}

export default About;