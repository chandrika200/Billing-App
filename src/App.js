import React,{useState,useEffect} from 'react'

import NavBar from './components/userAuthComponents/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App(){
   const[userLoggedIn,setUserLoggedIn] = useState(false)

  const userAuth = () =>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      userAuth()
    }

  },[])

 return (
   <div><NavBar userLoggedIn={userLoggedIn} userAuth={userAuth} /></div>
 ) 
 }

export default App;
