import './App.css';
import ParticlesBackGround from './components/ParticlesBackGround';
import ParallaxContents from './components/ParallaxContents';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParticlesBackGround /> 
        <ParallaxContents /> 
      </div>
    </ParallaxProvider>
  );
}

export default App;
