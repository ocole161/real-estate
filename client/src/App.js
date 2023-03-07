import logo from './logo.svg';
import Auth from './components/Auth';
import CreateAccount from './components/CreateAccount';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="auth" element={ <Auth /> } />
        <Route path="signup" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
