import Btn from './btn.js';
import './styles/form.css';

const Form = ({title, btnTitle, fields, method, url }) => {
const sections = fields.map((field,i) =>{
  return (
    <div>
      <label htmlFor={field.fieldname} >{field.fieldname}</label>
      <input name= {field.fieldname} type={field.type}  />
    </div>
  )
})

  return (<form className={`${title}Form`} action={url} method = {method}>
    { sections }
    <Btn btnTitle={btnTitle} title={title} />
    <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
  </form>)
}
export default Form;