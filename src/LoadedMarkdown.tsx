import React, { useState } from "react";
import Markdown from 'react-markdown';

import{useAsyncEffect}from'./useAsyncEffect';

interface Props{
  path:string,
}

const LoadedMarkdown:React.FC<Props> =({path}:Props)=>{
  const [source,setSource]=useState('');

  useAsyncEffect(async ()=>{
    const {body}=await fetch(path);
    if(body){
      const reader=body.getReader();
      const {value}=await reader.read();
      const codes:number[]=Array.from(value);
      const chars=codes.map((v:number)=>String.fromCharCode(v));
      const html=chars.join('');
      setSource(html);
    }
  });

  return <Markdown source={source}/>;
}
export default LoadedMarkdown;