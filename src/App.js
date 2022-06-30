
import './App.css';
import LandingPage from './containers/landing-page';
import AppLogo from './components/logo';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
     <div className='App'>
       <BrowserRouter>
       <AppLogo/>
       <Routes>
         <Route exact path='/' element={<LandingPage/>} />
         
       </Routes>
        
        </BrowserRouter>
        
   </div>  
 
  
  );
}

export default App;
