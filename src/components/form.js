import Btn from './btn.js';
import './styles/form.css';
import {validate } from '../functions/validator.js';

const Form = ({title, btnTitle, fields, method, url }) => {

const sections = fields.map((field,i) =>{
  return (
    <div key={i + "field"}>
      <label htmlFor={field.fieldname}>{field.fieldname}</label>
      <input name= {field.fieldname}  className={"inputField"} onChange={(e)=>validate(field.fieldname,e)}  type={field.type}  />
    </div>
  )
})

  return (<form className={`${title}Form`} action={url} method = {method}>
    { sections }
    <Btn btnTitle={btnTitle} title={title} />

  </form>)
}
export default Form;