import './styles/landingpagecard.css'
const LandingPageCard = ({ icon, writeup}) => {
    return ( <div className="landingpagecard">
        <span>{icon}</span>
        <p>{writeup}</p>

    </div> );
}

export default LandingPageCard;
