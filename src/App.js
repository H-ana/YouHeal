import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/homepage/homepage';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
