// import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';
import './Keyboard.css'

import Spline from '@splinetool/react-spline'

export default function Home() {
    function onSplineMouseDown(e) {
        if (e.target.name === 'Key GO') {
            console.log('I have been clicked!');
        }
    }

  return (
    <div className='splines'>
        <Spline
            scene="https://prod.spline.design/nE9hpdcOY5IANuCq/scene.splinecode" 
            onSplineMouseDown={onSplineMouseDown}
        />
    </div>
  );
}

