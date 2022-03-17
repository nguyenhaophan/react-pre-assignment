import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import User from './components/User/User';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element ={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;