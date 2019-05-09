import React, { useState } from 'react';
import Markdown from 'react-markdown';
import logo from './logo.svg';
import './App.css';
import {useAsyncEffect} from './useAsyncEffect';

const App: React.FC = () => {
  const [md,setMd]=useState('');

  useAsyncEffect(async ()=>{
    const {body}=await fetch('./content/test.md');
    if(body){
      const reader=body.getReader();
      const {value}=await reader.read();
      const codes:number[]=Array.from(value);
      const chars=codes.map((v:number)=>String.fromCharCode(v));
      const html=chars.join('');
      setMd(html);
    }
  });

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
