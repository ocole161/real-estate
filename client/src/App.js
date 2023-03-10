import Navigation from './components/Navigation';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import Auth from './components/Auth';
import CreateAccount from './components/CreateAccount';
import UserPage from './components/UserPage';
import UpdateProperty from './components/UpdateProperty';
import CreateProperty from './components/CreateProperty';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [messages, setMessages] = useState([]);
  
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

  useEffect(() => {
    fetch('/properties')
    .then(r =>r.json())
    .then(data => setProperties(data))
  }, [])

  useEffect(() => {
    fetch('/favorite_properties')
    .then(r =>r.json())
    .then(data => setFavorites(data))
  }, [])

  useEffect(() => {
    fetch('/messages')
    .then(r =>r.json())
    .then(data => setMessages(data))
  }, [])

  function onDeleteProperty(deletedProperty) {
    const updatedProperties = properties.filter(property => property.id !== deletedProperty.id)
    setProperties(updatedProperties)
}

  function onUpdateProperty(updatedProperty) {
    const updatedProperties = properties.map(property => property.id === updatedProperty.id ? updatedProperty : property)
    setProperties(updatedProperties)
  }

  return (
    <div className="App">
      <Navigation updateUser={updateUser} user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} properties={properties} favorites={favorites} onDeleteProperty={onDeleteProperty} updateUser={updateUser} />} />
        <Route path="/login" element={ <Auth user={user} updateUser={updateUser} /> } />
        <Route path='/users/new' element={<CreateAccount updateUser={updateUser} />} />
        <Route path='/users/:id' element={<UserPage user={user} properties={properties} favorites={favorites}/>} />
        <Route path='/admin' element={<AdminPage properties={properties} favorites={favorites} messages={messages}/>} />
        <Route path='/properties/new' element={<CreateProperty />} />
        <Route path='/properties/update/:id' element={<UpdateProperty onUpdateProperty={onUpdateProperty}/>} />
      </Routes>
    </div>
  );
}

export default App;
