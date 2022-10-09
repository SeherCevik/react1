//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
//import {useState}  from "react";

function App() {
  const [name, setName] = useState("seher");
  const [age,setAge] =useState(23);
  const [friends,setFriends] =useState(["Erdoğan","MK"])
    const [adress,setAdress]=useState({title:"bursa",zip:16000});
  return (
      <div className="App">
        <h1> merhaba {name} !</h1>
         <h2>age {age}</h2>
          <button onClick={() => setName("TAMER")}>change Name</button>
          <button onClick={()=> setAge(24)}>change Age</button>


          //array stati listelemek için
          //listeleme işlemi yapıyorsak return ettiğimiz en dıştaki etikete key vermek gerekir
          <hr/>
          <br/>
          <h2>Friends</h2>

          {friends.map((friends,index)=>(
              <div key={index}>{friends}</div>
          ))}

            <br/>
          üzerine ekleme yapmak istersek;
          <button onClick={()=> setFriends([...friends,"yıldız"])}>add Friends</button>


          <hr/>
          <br/>
          <h2>Adress</h2>
          <div>{adress.title} {adress.zip}</div>

           <button onClick={()=> setAdress({title:"zaaarya",zip:54000})}>change the adress</button>
          <button onClick={()=> setAdress({...adress,title:"zaaarya"})}>change the adress</button>


      </div>
  );
}

export default App;
