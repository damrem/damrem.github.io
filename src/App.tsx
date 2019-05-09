import React, { useState } from 'react';
import Markdown from 'react-markdown';
import logo from './logo.svg';
import './App.css';
import {useAsyncEffect} from './useAsyncEffect';

const App: React.FC = () => {
  const [md,setMd]=useState('');

  useAsyncEffect(async ()=>{
    const fetched=await fetch('./public/content/test.md');
    console.log(fetched);
    setMd(fetched.toString());
  }, []);

  return (
    <div className="App">
      <Markdown source={md.toString()||'# null'}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
