import './styles/btn.css'

const Btn = ({ btnTitle, title }) => {
    return ( <button className={`${title}Btn`}>{ btnTitle }</button> );
}
 
export default Btn;