import React from 'react';
import './App.css';
import { Features } from './components/layouts/Features';
import { Footer } from './components/layouts/Footer';
import { Header } from './components/layouts/Header';
import { Home } from './components/layouts/Home';
import { NewArrival } from './components/layouts/NewArrival';
import { OneDeal } from './components/layouts/OneDeal';

const App =() => {
  return (
    <div className="App">
       <Header />
       <Home />
       <Features />
       < OneDeal />
       <NewArrival />
       <Footer />
    </div>
  );
}

export default App;
