import React, { Component } from 'react'
import * as THREE from 'three'
import React3 from 'react-three-renderer'

import './App.css';
import { roundedRect } from './roundedrect'


class App extends Component {
  constructor (props) {
    super(props)

    this.cameraPosition = new THREE.Vector3(0, 0, 5)
    this.state = {
      cubeRotation: new THREE.Euler(),
    }
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01, 
          this.state.cubeRotation.y + 0.01, 
          0
        )
      })
    }
  }
  render() {
    const width = window.innerWidth
    const height = window.innerHeight
    let points = []
    return (
      <React3 
        mainCamera='camera'
        width={width}
        height={height}
        clearAlpha={.5}
        alpha={true}
        pixelRatio={1}
        onAnimate={this._onAnimate}
        shadowMapEnabled={true}
      >
        <scene
          receiveShadow={true}
          >
          <perspectiveCamera
            name='camera'
            fov={100}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          
          />
          <mesh
            rotation={this.state.cubeRotation}
            position={new THREE.Vector3(-3, 0, 0)} 
          >
          <meshBasicMaterial
          color={0xff0000}
          side={THREE.DoubleSide}
          />
          <extrudeGeometry
            settings={ 
              {
              amount: 1,
              bevelEnabled: true,
              bevelSegments: 2,
              steps: 2,
              bevelSize: .2,
              bevelThickness: .2,
            }}
            >
            {roundedRect(0, 0, 4, 2, 1)}
          </extrudeGeometry>
         </mesh>
        </scene>
      </React3>
    );
  }
}

export default App;
