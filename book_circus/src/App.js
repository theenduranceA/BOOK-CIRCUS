import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './components/Contact/ContactUs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookSearch from './components/BookSearch/BookSearch';
import BookDetails from './components/BookDetails/BookDetails';
import Review from './components/Review/Review';
import ReadingLists from './components/ReadingLists/ReadingLists';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search' element={<BookSearch />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="review" element={<Review />} />
        <Route path="/reading-lists" element={<ReadingLists />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;