import logo from './logo.svg';
import './App.css';
import { Link , Route , Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div >
        <nav>
            <ul>
              <li> <Link to="/"> Home</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>



      <Routes>
        <Route
      path="/"
      element={<Home />}
      
      // errorElement={<ErrorBoundary />}
    />
     <Route
      path="/login"
      element={<Login />}
      
      // errorElement={<ErrorBoundary />}
    />
     <Route
      path="/signup"
      element={<Signup />}
      
      // errorElement={<ErrorBoundary />}
    />
        
      </Routes>



     {/* <Signup/> */}
    </div>
  );
}

export default App;
