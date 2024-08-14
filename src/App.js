import React from 'react';
import '../src/styles/App.css';
import '../src/styles/responsivo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/js/script.js';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Main from '../src/components/Main'
import Footer from './components/Footer';
import Skills from './components/Skills';
function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Main></Main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
