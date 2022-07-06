import React from 'react'
import { Parallax } from 'react-scroll-parallax';

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
            <Parallax speed={-5}>
                <Welcome />
            </Parallax>
            <Parallax speed={10}>
                <About />
            </Parallax>
            <Parallax speed={5}>
                <SoftwareDevelopment />
            </Parallax>
            <Parallax speed={2}>
                <WebsiteDevelopment />
            </Parallax>
            <Parallax speed={10}>
                <Consulting />
            </Parallax>
            <Parallax speed={-10}>
                <ProjectManagement />
            </Parallax>
            <Parallax speed={-5}>
                <SystemIntegration />
            </Parallax>
            <Parallax speed={-5}>
                <Operation />
            </Parallax>
            <Parallax speed={-5}>
                <References />
            </Parallax>
        </div>
    )
}

export default ParallaxContents