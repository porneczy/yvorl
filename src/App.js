import './App.css';
import ParticlesBackGround from './components/ParticlesBackGround';
import Welcome from './components/Welcome';
import About from './components/About';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import WebsiteDevelopment from './components/WebsiteDevelopment';
import Consulting from './components/Consulting';
import ProjectManagement from './components/ProjectManagement';
import SystemIntegration from './components/SystemIntegration';
import Operation from './components/Operation';
import References from './components/References';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParticlesBackGround />  
        <Welcome />
        <About />
        <SoftwareDevelopment />
        <WebsiteDevelopment />
        <Consulting />
        <ProjectManagement />
        <SystemIntegration />
        <Operation />
        <References />
      </div>
    </ParallaxProvider>
  );
}

export default App;
