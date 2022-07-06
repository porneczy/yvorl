import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import Welcome from './ContentComponents/Welcome';
import About from './ContentComponents/About';
import SoftwareDevelopment from './ContentComponents/SoftwareDevelopment';
import WebsiteDevelopment from './ContentComponents/WebsiteDevelopment';
import Consulting from './ContentComponents/Consulting';
import ProjectManagement from './ContentComponents/ProjectManagement';
import SystemIntegration from './ContentComponents/SystemIntegration';
import Operation from './ContentComponents/Operation';
import References from './ContentComponents/References';

function ParallaxContents() {


    return (
        <div>
            <Parallax pages={4} style={{ top: '0', left: '0' }}>

                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                >
                    <Welcome />
                </ParallaxLayer>



                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                >
                    <About />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                >
                    <SoftwareDevelopment />
                </ParallaxLayer>


                <ParallaxLayer
                    offset={3}
                    speed={0.5}
                >
                    <WebsiteDevelopment />
                </ParallaxLayer>








                {/* 
                
            
                <Consulting />
            
                <ProjectManagement />
            
                <SystemIntegration />
            
                <Operation />
            
                <References />
             */}
            </Parallax>
        </div>
    )
}

export default ParallaxContents