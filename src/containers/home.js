import {HomeDepartmentCard, QuickLlinkCard} from "../components/home-cards";

const Home = () =>{
  return (<div className="home">
  <h1 className="homewriteup">A man's car represents his honour,<br/>lets help define you right</h1><br/>
  <h3>contact:</h3>
  <HomeDepartmentCard icon={<p>icon here</p>} deptName={<h3>Sales</h3>} />
  <HomeDepartmentCard icon={<p>icon here</p>} deptName={<h3>Service</h3>} />

  </div>)
}

export default Home;
