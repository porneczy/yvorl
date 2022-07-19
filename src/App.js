import './App.css';
import React, {  useRef, useState, useEffect } from "react"
import ParticlesBackGround from './components/ParticlesBackGround';
import ParallaxContents from './components/ParallaxContents';
import BigLogo from './components/BigLogo';
import Overlay from './components/Overlay';
import Loading from './components/Loading';


function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
    {loading === false ? (
      <div className="App">
        
        <BigLogo scroll={scroll} caption={caption} />
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
          
        <ParticlesBackGround /> 
        {/* <ParallaxContents /> */}
        
      </div>
      ) : (
        <Loading />
      )}
      </>
  );
}

export default App;
