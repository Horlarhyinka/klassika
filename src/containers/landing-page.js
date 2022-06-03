import Btn from "../components/btn";
import LandingPageWriteUp from "../components/landing-page-writeup";
import SignUpForm from "./sign-up-form";
import LandingPageCard from "../components/landing-page-cards";
import './styles/landingpage.css';
import { Icon } from '@iconify/react';
import Footer from "../components/footer";

const LandingPage = () => {
    return ( <div className="landingpage">

        <LandingPageWriteUp/>
        <Btn title={"landingpage"} btnTitle={"Login"} />
        <div className="section">
        <SignUpForm/>
        <div className="cards">
            <LandingPageCard icon={<Icon icon="mdi-light:home" className="clockIcon"/>} writeup={"new and pre-owned car sales"} />
            <LandingPageCard icon={<Icon icon="mdi-light:home" className="clockIcon"/>} writeup={"meet potential buyers on our sales room"} />
            <LandingPageCard icon={<Icon icon="mdi-light:home" className="clockIcon"/>} writeup={"flexible appointment scheduling for services and recalls"} />
            <LandingPageCard icon={<Icon icon="mdi-light:home" className="clockIcon"/>} writeup={"live chat with skilled agents"} />
            <LandingPageCard icon={<Icon icon="mdi-light:home" className="clockIcon"/>} writeup={"refer a customer and earn commission"} />
        </div>
        </div>
        <Footer/>
    </div> );
}
 
export default LandingPage;