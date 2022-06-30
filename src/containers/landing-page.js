import Btn from "../components/btn";
import LandingPageWriteUp from "../components/landing-page-writeup";
import SignUpForm from "./sign-up-form";
import LandingPageCard from "../components/landing-page-cards";
import './styles/landingpage.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( <div className="landingpage">
        <LandingPageWriteUp/>
        <Link to="/sign-in"><Btn title={"landingpage"} btnTitle={"Login"} /></Link>
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

    </div> );
}

export default LandingPage;
