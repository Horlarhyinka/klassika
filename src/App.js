
import './App.css';
import LandingPage from './containers/landing-page';
import SignInForm from './containers/sign-in-form';
import AppLogo from './components/logo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./components/footer";
import Home from "./containers/home";
import NotFound from "./containers/not-found"

function App() {
  return (
    <BrowserRouter>
     <div className='App'>
        <AppLogo/>
        <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/sign-in" element={<SignInForm/>} />
        <Route exact path="/home" element={<Home/>}/>
        <Route path ="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
   </div>
   </BrowserRouter>


  );
}

export default App;
