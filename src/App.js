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
      rotation: new THREE.Euler(),
    }
    this.onAnimate = () => {
      this.setState({
        rotation: new THREE.Euler(
         0, this.state.rotation.y + 0.01, 0
        )
      })
    }
  }
  render() {
    const width = window.innerWidth
    const height = window.innerHeight

    return (
      <React3 
        mainCamera='camera'
        width={width}
        height={height}
        clearAlpha={.5}
        alpha={true}
        pixelRatio={1}
        onAnimate={this.onAnimate}
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
            lookAt={new THREE.Vector3(0, 0, 0)}
          
          />
          <ambientLight
            color={"white"}
          />
          <directionalLight
            color={'white'}
            lookAt={new THREE.Vector3(0, 0, 0)}
            position={new THREE.Vector3(0, 0, 5)}
          />
          
          <mesh
            position={THREE.center} 
            rotation={this.state.rotation}
          >
          <meshPhongMaterial
            color='grey'
            />
          <extrudeGeometry
            settings={ 
              {
              amount: .5,
              bevelEnabled: true,
              bevelSegments: 1000,
              steps: 100,
              bevelSize: 1,
              bevelThickness: .5,
            }}
            >
            {roundedRect(0, 0, 3, .5, .25)}
          </extrudeGeometry>
         </mesh>
        </scene>
      </React3>
    );
  }
}

export default App;
