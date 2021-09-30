import './App.css';
import React, { useEffect } from 'react';

export default function App() {
  const year = new Date().getFullYear();

  // useEffect(() => {
  //   document.title = "Richard Smith | Portfolio"
  // }, []);

  return (
    <div className="App">
      <nav style={{display: 'flex', justifyContent: 'space-between', position: 'fixed', top: 0, overflow: 'hidden', width: '100%', zIndex: 99}}>
        <a href='/' style={{textDecoration: 'none'}}>RICHARD SMITH</a>
        <div>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
        </div>
      </nav>

      <div>
        <section id="home" style={{height: '100vh'}}> 
          <div>
            Home
          </div>
        </section>
        <section id="about" style={{height: '100vh'}}> 
          <div>
            About
          </div>
        </section>
      </div>
      
      {/* <footer>
        <p className="text-xs">Designed and Developed by Richard P Smith &copy; {year}</p>
      </footer> */}
    </div>
  );
}
