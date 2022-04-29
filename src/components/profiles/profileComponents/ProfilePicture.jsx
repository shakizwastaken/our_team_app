import React from 'react';
import ProfilePic from '../profilePictures/profilePic.jpg'


const ProfilePicture = (props)=>{
    return(
        <img className="pfp" src={ProfilePic} alt="failed to load" />
    );
}



export default ProfilePicture;