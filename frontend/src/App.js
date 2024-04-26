// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { SavedBooksProvider } from './context/SavedBooksContext';
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <SavedBooksProvider>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="*" element={<PrivateRoutes path="/" element={<HomePage />} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <ToastContainer autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false} theme='dark' pauseOnHover={false} />
          </AuthProvider>
        </SavedBooksProvider>
      </Router>
    </div>
  );
}

export default App;
