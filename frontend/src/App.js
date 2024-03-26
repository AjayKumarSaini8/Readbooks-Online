// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="*" element={<PrivateRoutes path="/" element={<HomePage />} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
