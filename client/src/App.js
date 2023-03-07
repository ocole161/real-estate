import Navigation from './components/Navigation';
import Home from './components/Home';
import Auth from './components/Auth';
import CreateAccount from './components/CreateAccount';
import UserPage from './components/UserPage';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  const updateUser = (user) => setUser(user)

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setUser(user))
      } else {
        setUser(null)
      }
    })
  },[])



  return (
    <div className="App">
      <Navigation updateUser={updateUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Auth updateUser={updateUser} /> } />
        <Route path='/users/new' element={<CreateAccount updateUser={updateUser} />} />
        <Route path='/users/:id' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
