import React from 'react'
import { Parallax } from 'react-scroll-parallax';

function Welcome() {
    return (
        <div>
            <Parallax speed={-5}>
                <h1 className="slow">Yvorl Kft.</h1>
            </Parallax>
        </div>
    )
}

export default Welcome