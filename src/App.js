import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/homepage/homepage';
import OurServices from './pages/ourservices/ourservices';
import AboutUs from './pages/aboutus/aboutus';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/><Footer/></>}/>
          <Route path='/ourservices' element={<><Navbar/><OurServices/><Footer/></>}/>
          <Route path='/aboutus' element={<><Navbar/><AboutUs/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
