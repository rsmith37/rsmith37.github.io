import './App.css';
import React, { useEffect } from 'react';

export default function App() {
  const year = new Date().getFullYear();

  // useEffect(() => {
  //   document.title = "Richard Smith | Portfolio"
  // }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="name">
            <a href='/'>RICHARD SMITH</a>
          </div>
          <ul>
            <li>
              <a href='#about'>About</a>    
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
          </ul>
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
