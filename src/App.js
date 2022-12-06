import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
