import './App.css';
import ParticlesBackGround from './components/ParticlesBackGround';
import ParallaxContents from './components/ParallaxContents';
import BigLogo from './components/BigLogo';


function App() {
  return (
      <div className="App">
        <BigLogo  />
          
        
        <ParticlesBackGround /> 
        <ParallaxContents />
      </div>
  );
}

export default App;
