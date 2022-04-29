import React from 'react';
import './App.css';


import Profile from './components/profiles/Profile';

function App() {

  const profiles = [
    {
      key:0,
      name:"Simonu Moctezuma",
      role:"CEO",
      profilePicture:"./components/profiles/profilePictures/profilePic.jpg",
      address:"Simonu@myCompany.com"
      
    },
    {
      key:1,
      name:"Eugenios Terenti",
      role:"Executive",
      profilePicture:"./components/profiles/profilePictures/profilePic.jpg",
      address:"Eugenios@myCompany.com"
    },
    {
      key:2,
      name:"Afif Goteleib",
      role:"Manager",
      profilePicture:"./components/profiles/profilePictures/profilePic.jpg",
      address:"Afif@myCompany.com"
    }

  ];

  const generateProfiles=()=>{
    return profiles.map(profile => <Profile {...profile} />)
  }

  return (
    <div className="App">
      <h1 className='hero-title'>Meet our team</h1>
      <div className='profiles-box'>
        {generateProfiles()}
      </div>
    </div>
  );
}

export default App;
