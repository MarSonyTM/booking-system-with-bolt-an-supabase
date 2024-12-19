import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import BookingSystem from './pages/BookingSystem';
import AdminDashboard from './pages/AdminDashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/book" element={<BookingSystem />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;