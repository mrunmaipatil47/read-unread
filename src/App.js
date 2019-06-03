import React from 'react';
import { InvestorDocument } from './InvestorDocument/InvestorDocument.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import hamburger from './assets/icons/Hamburger.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-Top'>
          <img src={ logo } className="App-logo" alt="logo" />
          <div className='App-Title-Login'>
            <p style={ { padding: 5, margin: 0 } }>Smithton University</p>
            <FontAwesomeIcon style={ { padding: 10, margin: 0 } } icon={ faUserCircle } />
          </div>
        </div>
        <div className='App-header-Bottom'>
          <img style={ { padding: 10, marginLeft: 23 } } src={ hamburger } alt='' />
          <div className='Flex-Container'>
            <FontAwesomeIcon style={ { padding: 10, marginTop: 5 } } icon={ faCaretDown } />
            <p>Funds</p>
          </div>
          <div className='Flex-Container'>
            <FontAwesomeIcon style={ { padding: 10, marginTop: 5 } } icon={ faCaretDown } />
            <p>Managers</p>
          </div>
        </div>
      </header>
      <InvestorDocument />
    </div>
  );
}

export default App;
