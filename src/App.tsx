import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
// import Label, { GreenLabel } from './components/HOC/Label';
import Dashboard from './components/Context/Dashboard';

function App() {

  const footerContent = <div>Some updated footer content</div>;
  const content = () => {
      return  <>        
          <Dashboard />    
            {/* Updated Main Content
            <div>
              <Label value="Magenic Masters" />
              <Label value="ReactJS" />
              <Label value="Redux" />
              <GreenLabel value="I am green" />
              <GreenLabel value="I am green too!" />

            </div> */}
          </>           
  };

  return (
    <div className="App">
        <Header>
          <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/react">React JS</a>
              </li>
              <li>
                <a href="/es6">ES6</a>
              </li>
              <li>
                <a href="/redux">Redux</a>
              </li>
              <li>
                <a href="/demo">Demo</a>
              </li>
            </ul>          
        </Header>
        
        <MainContent
          content={content}
        >

        </MainContent>
        

        <Footer
          footerContent={footerContent}
        >
        </Footer>
    </div>
  );
}

export default App;
