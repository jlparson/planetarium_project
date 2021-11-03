import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';


const StudentItem = ({ image, fullName, url }) => {
    return (
        <div className="studentItem">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h2 className="studentName"> {fullName} </h2>
            <a href={url}><GitHubIcon /></a>
        </div>
    );
}

export default StudentItem;