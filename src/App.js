import React, { Component } from 'react'
import * as THREE from 'three'
import React3 from 'react-three-renderer'

import './App.css';

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
          this.state.cubeRotation.x + .01, 
          this.state.cubeRotation.y + .01,
          0
          )
      })
    }
  }
  componentDidMount () {
        //this.mesh.applyMatrix( new THREE.Matrix4().makeScale( 1, 1, .33, .25 ));
  }
  meshRef(mesh) {
    this.mesh = mesh;
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
        onAnimate={this._onAnimate}
        clearAlpha={.5}
        alpha={true}
        pixelRatio={1}
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
            far={100}
            position={this.cameraPosition}
          />
           <ambientLight 
            color="white"
            />
          <directionalLight
            color="grey"
            lookAt={new THREE.Vector3(0, 0, 0)}
            position={new THREE.Vector3(0, 0, 5)}
            />
          <mesh
            rotation={this.state.cubeRotation}
            castShadow={true}
            position={THREE.center}
          >
         
            <boxGeometry 
             width={2}
             height={2}
             depth={2}
            />
             <meshPhongMaterial
            color={Number('0x'+Math.floor(Math.random()*16777215).toString(16))}
          /> 
          </mesh>
        </scene>
      </React3>
    );
  }
}

export default App;
