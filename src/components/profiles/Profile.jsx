import React from 'react';

import './style.css';

import ProfilePicture from './profileComponents/ProfilePicture';
import Username from './profileComponents/Username';
import Address from './profileComponents/Address';

const Profile = (props)=>{

    return(
        <div className='profile'>
            <ProfilePicture value= {props.ProfilePicture} />
            <div className='info'>
                <Username value= {props.name} />
                <h2 className='role' > {props.role} </h2> 
                <Address value= {props.address} />
            </div>
        </div>
    );

}


export default Profile;