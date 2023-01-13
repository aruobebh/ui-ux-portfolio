import React from 'react';

import { Navbar, Header, About, Work, Contact, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
    </div>
  )
}

export default App