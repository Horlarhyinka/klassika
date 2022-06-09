import Btn from './btn.js';
import './styles/form.css';
import {validate, ErrMessage} from '../functions/validator.js';
import { useState } from 'react';


const Form = ({title, btnTitle, fields, method, url, submit }) => {
const [userEmail, setUserEmail] = useState("");
const [userTel, setUserTel] = useState("");
const [userPassword, setUserPassword] = useState("");
const funcs = {
  email:function(e){
    setUserEmail(e.target.value)
  },
  Tel:function(e){
    setUserTel(e.target.value)
  },
  Password:function(e){
    setUserPassword(e.target.value)
  }
}
const data = {email:userEmail,Tel:userTel,password:userPassword};

  const handleSubmit=()=>{
    fetch('/sign-up',{
  method:"post",
  header:{"Content-type":"application/json"},
  body:JSON.stringify(data)})=====
}

const sections = fields.map((field,i) =>{
  return (
    <div key={i + "field"}>
      <label htmlFor={field.fieldname}>{field.fieldname}</label>
      <input name= {field.fieldname}  className={"inputField"} onKeyPress={console.log({userEmail, userTel, userPassword})} onKeyUp={funcs[field.fieldname]} onChange={(e)=>validate(field.fieldname,e)}  type={field.type}  />
    </div>
  )
})
  return (<form className={`${title}Form`} action={url} method = "post">
    { sections }
    <Btn btnTitle={btnTitle} title={title} />

  </form>)
}
export default Form;
