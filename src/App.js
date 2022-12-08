import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/homepage/homepage';
import OurServices from './pages/ourservices/ourservices';
import AboutUs from './pages/aboutus/aboutus';
import Dept from './pages/departments/departments';
import Contactus from './pages/contactus/contactus';
import BookApt from './pages/bookappnmt/bookappnmt';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/><Footer/></>}/>
          <Route path='/ourservices' element={<><Navbar/><OurServices/><Footer/></>}/>
          <Route path='/aboutus' element={<><Navbar/><AboutUs/><Footer/></>}/>
          <Route path='/departments' element={<><Navbar/><Dept/><Footer/></>}/>
          <Route path='/contactus' element={<><Navbar/><Contactus/><Footer/></>}/>
          <Route path='/bookappointment' element={<><Navbar/><BookApt/></>}/>
          <Route path='/gallery' element={<><Navbar/><Gallery/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
