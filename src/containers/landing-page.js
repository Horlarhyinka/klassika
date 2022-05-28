import Btn from "../components/btn";
import LandingPageWriteUp from "../components/landing-page-writeup";
import SignUpForm from "./sign-up-form";
import LandingPageCard from "../components/landing-page-cards";
import './styles/landingpage.css';

const LandingPage = () => {
    return ( <div className="landingpage">

        <LandingPageWriteUp/>
        <Btn title={"landingpage"} btnTitle={"Login"} />
        <div className="section">
        <SignUpForm/>
        <div className="cards">
            <LandingPageCard icon={<h1>icon</h1>} writeup={"writeup goes here"} />
        </div>
        </div>
        
        
    </div> );
}
 
export default LandingPage;