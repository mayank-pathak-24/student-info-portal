import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={< Home/>} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
