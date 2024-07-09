//U61753810
import React from 'react';
import './App.css';
import Gallery, { Header } from './components/Gallery';

function App() {
  const teamMembers = [
    { id: 1, name: 'Ben James', role: 'CEO', photo: 'ben.jpg' },
    { id: 2, name: 'Jake Himm', role: 'CFO', photo: 'jake.jpg' },
    { id: 3, name: 'Susan Wender', role: 'CMO', photo: 'susan.jpg' },
    
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Meet the Team" />
      </header>
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;

