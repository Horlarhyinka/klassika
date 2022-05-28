import Btn from './btn.js'

const Form = ({title, btnTitle, fields, method, url }) => {
const sections = fields.map((field,i) =>{
  return (
    <div>
      <label htmlFor={field.fieldname} >{field.fieldname}</label>
      <input name= {field.fieldname} type={field.type}  />
    </div>
  )
})

  return (<form className={`${title}Form`} method = {method}>
    { sections }
    <Btn/>
  </form>)
}
export default Form;