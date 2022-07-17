import './App.css';
import React, {  useRef } from "react"
import ParticlesBackGround from './components/ParticlesBackGround';
import ParallaxContents from './components/ParallaxContents';
import BigLogo from './components/BigLogo';
import Overlay from './components/Overlay';


function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
      <div className="App">
        <BigLogo scroll={scroll} caption={caption} />
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
          
        <ParticlesBackGround /> 
        {/* <ParallaxContents /> */}
        
      </div>
  );
}

export default App;
