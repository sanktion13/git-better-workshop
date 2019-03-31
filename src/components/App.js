import React from 'react';
import GovernmentFixer from './GovernmentFixer';
import '../css/App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GovernmentFixer size="municipal" />
      </header>
    </div>
  );
}
