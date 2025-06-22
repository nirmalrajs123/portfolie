import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <div className="App">
      <header>
        <h1>NIRMAL RAJ'S Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p><strong>I will become a full stack developer
 
            Dedicated Computer Science and Engineering student with a passion for software development and database management. Skilled in teamwork, leadership, and project management, with experience as a Class Representative and Event Coordinator. Strong interpersonal and communication abilities, committed to contributing technical expertise and organizational skills to drive innovation and success in a dynamic environment. Passionated about technology and business.</strong>.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project One</h3>
          <p><strong>Dbms Project-Blood Bank Unit. “The system is built with HTML and PHP. It manages blood. It handles 
          requests. It stores details. It supports aid”. </strong></p>

        </div>
        <div className="project">
          <h3>Project Two</h3>
          <p>-<strong>Truck link logistics -" Built a web app with HTML, PHP, and CSS. It helps find the cheapest 
               truck driver. Users can compare rates. It allows bargaining based on shipment details."</strong>.</p>
        </div>
        <div className="project">
          <h3>Project Three</h3>
          <p><strong>Personality Prediction System Through CV Analysis: “To predict a person's traits. It studies the 
              details in the CV and provides insights. This helps in understanding a candidate’s personality for 
                hiring “. </strong></p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email:  <a href="nirmalrajs2023@gmail.com"> <img
           src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Gmail"
               style={{ width: '40px', height: '40px' }}
               />       </a>     </p>
        <p>LinkedIn: <a href="www.linkedin.com/in/nirmal-raj-s-8a8268306"><img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="LinkedIn" 
              style={{ width: '40px', height: '40px' }}
             />     </a></p>
      </section>

      <footer>
        <p>&copy;  NIRMALRAJS@2025 </p>
      </footer>
    </div>
  );
      

    </>
  )
}

export default App
