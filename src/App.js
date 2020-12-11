import React, { useState } from 'react';
import './App.css';

function App() {
  const [object, setObject] = useState({});

  // fetch some Github data
  fetch('https://api.github.com/users/facebook')
  .then(result => {
    return result.json();
  })
  .then(data => {
    
    // Destructuring 
    const { bio, location, name, login } = data;
    // console.log('bio >', bio);
    // console.log('location >', location);
    // console.log('name >', name);
    // console.log('username >', login);

    // Pass the data through setObject
    setObject({ bio, location, name, login });

    // Print the object 
    console.log(object);
    
  })
  return (
    <div>
      <h1>Github Profile</h1>
      <h2>Name: {object.name}</h2>
      <h2>Username: {object.login}</h2>
      <h2>Location: {object.location}</h2>
      <h2>Bio: {object.bio}</h2>
    </div>
  )
  
}

export default App;
