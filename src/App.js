
import './App.css';
import LandingPage from './containers/landing-page';
import SignInForm from './containers/sign-in-form';
import AppLogo from './components/logo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/footer";
import Home from "./containers/home";

function App() {
  return (
    <BrowserRouter>
     <div className='App'>
        <AppLogo/>
        <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/sign-in" element={<SignInForm/>} />
        <Route exact path="/home" element={<Home/>}/>
        </Routes>
        <Footer/>
   </div>
   </BrowserRouter>


  );
}

export default App;
