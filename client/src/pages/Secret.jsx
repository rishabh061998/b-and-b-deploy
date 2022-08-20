import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie"
import axios from "axios";
import {ToastContainer,toast} from "react-toastify"

const Secret=()=>{

    const navigate=useNavigate()

    const [cookies,setCookies,removeCookie] =useCookies([]);
useEffect(()=>{
const verifyUSer=async()=>{
if(!cookies.jwt){
    navigate("/login")
}
else{
    const {data} = await axios.post("http://localhost:4000",{},{withCredentials:true});

    if(!data.status){
        removeCookie("jwt")
        navigate("/login")
    }
    else toast (` HI ${data.user}`,{theme:"dark"})
}
}
verifyUSer()

},[cookies,navigate,removeCookie])

const logOut=()=>{
    removeCookie("jwt")
navigate("/register")
}

    return(
        <>
        <div className="private">
            <h1>Super secret page</h1>
            <button onClick={logOut}>Logout</button>
      
        </div>
        <ToastContainer/>
        </>
    )
}

export default Secret