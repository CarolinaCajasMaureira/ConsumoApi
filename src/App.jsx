import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainHome from './Components/Home/MainHome'; 
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/ConsumoApi" element={<MainHome />} />
        <Route path="/ConsumoApi/register" element={<Register setUser={setUser} />} />
        <Route path="/ConsumoApi/login" element={<Login user={user} />} />
      </Routes>
    </Router>
  );
}
export default App;