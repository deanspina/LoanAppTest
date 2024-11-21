import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home';
    import ApplicationForm from './pages/ApplicationForm';
    import Dashboard from './pages/Dashboard';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      );
    }

    export default App;
