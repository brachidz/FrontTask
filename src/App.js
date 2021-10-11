import logo from './logo.svg';
import './App.css';
import Tasks from './conponents/Tasks';
import {React,useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlMWNlMzVkODdiZmYxMzBiOTJlYyIsIm5hbWUiOiJCcmFjaGEiLCJpYXQiOjE2MzM4NzAyOTUsImV4cCI6MTYzNTA3OTg5NX0.IokUcLW1TsXWQtWRPSoirNdIvPCBURTPmLIhjOhZ41s";
  //const [result, setResult] = useState();

//   const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

// const bodyParameters = {
  

//   title: "a",
// body: "some task",

// done: 1
// };



  useEffect(()=>{
    debugger


    // axios.post( 
    //   'http://todo.etodo.xyz/api/v1/tasks',
    //   bodyParameters,
    //   config
    // ).then(console.log).catch(console.log);

    // axios.get( 
    //   'http://todo.etodo.xyz/api/v1/tasks',
      
    //   config
    // )
    // .then(res => {
    //    console.log(res);
      
    //    });
    
    
    
  





  },[]);



  return (
    
    <div className="container">
      <div className="app-wrapper">
      <div className="main"> 
      <Tasks></Tasks>
      </div>
      </div>
    </div>
    // <>
    // <input type="checkbox" className="custom-control-label"></input>
    // </>
  );
}

export default App;
