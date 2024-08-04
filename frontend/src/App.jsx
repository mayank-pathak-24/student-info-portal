import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/Notfound'; // Ensure this file exists

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
