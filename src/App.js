import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import medlist from './components/medlist';


function App() {
  return (
  <>
  <Router>
   <Header/>
   <Routes>
    <Route path="/medlist" element={<medlist />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
