import regex from "./regexp";
import { useState } from 'react';

const validate = (field,e) =>{
    console.log(regex[field].expression);
    console.log(e.target.attributes)
    if(regex[field].expression.test(e.target.value) !== true){
        e.target.className = "invalid";
        e.target.attributes.status.value = "invalid"
    };
    if(regex[field].expression.test(e.target.value) === true){
        e.target.className = "valid"
    };
 
}


const ErrMessage = ({field, status})=>{
   const [message,setMessage] = useState("");
   if(status === "invalid"){
       setMessage(regex[field].message)
   }
    return(<p className="errormessage">{message}</p>)
}

export {validate, ErrMessage};