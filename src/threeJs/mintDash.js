import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shaderEnter from "./Shaders/ShaderEnter";
import * as shaderExit from "./Shaders/ShaderExit";


import { IoMdCloseCircleOutline, IoMdArrowRoundBack, IoMdArrowRoundForward} from 'react-icons/io';

import {Text} from 'troika-three-text';
import styled from 'styled-components';
// import * as dat from "dat.gui";
import gsap from 'gsap';

import {DashBoard} from '../components/dashbaordComponents/dashboard'


let tempV = new THREE.Vector3();
let tempScale = new THREE.Vector3();
let tempRot = new THREE.Euler();
let resizeDebounce = true;

const raycaster = new THREE.Raycaster();
let hideDiv = false;


class MintDash extends Component {

  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.setupScene = this.setupScene.bind(this);
    this.setupCameras = this.setupCameras.bind(this);
    this.addObjects  = this.addObjects.bind(this);
    this.createFinalScene = this.createFinalScene.bind(this);
    this.settings = this.settings.bind(this);
    this.destroyContext = this.destroyContext.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.callBack = this.callBack.bind(this);
    this.leaveDash = this.leaveDash.bind(this);

    this.tween1 = true;
    this.tween2 = false;
    this.debounce = true;

    this.state = {
         lockonVault: this.props.isVaultLocked === 'true',
        currentAzimuth: 0
        
    }

  }

  componentWillMount() {
    // window.addEventListener("resize", this.handleWindowResize);
    // console.log('mounted');
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    console.log('mounted');
    this.setupScene();
  }

  setupScene() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    // this.renderer.setClearColor(0xeeeeee, 1);
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.physicallyCorrectLights = true;

    this.container.appendChild(this.renderer.domElement);

    this.sceneRoom = new THREE.Scene();
    this.sceneSite = new THREE.Scene();
    this.finalScene = new THREE.Scene();

    this.setupCameras();
    this.addObjects();
    this.createFinalScene();
    this.settings();
    this.start();
  }

 
  setupCameras() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.camera.position.set(0,0,0);
 

    this.cameraSite = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );


    let frustimSize = 1;
    // let aspect =  window.innerWidth / window.innerHeight;
    this.finalCamera = new THREE.OrthographicCamera(
      frustimSize  / -2,
      frustimSize  / 2,
      frustimSize / 2,
      frustimSize / -2,
      -1000,
      1000
    );
  

    if(this.state.lockonVault) {
      console.log('locked on dashboard');
      this.setState({currentAzimuth: 90});
    }
    
  }


  addObjects() {

  // 1 - Load each image as a Texture
  // 2 -  Map each Texture to a Material array
  // 3 - Add Material array to the Skybox cube
    const materialArray = createMaterialArray();
    const skyboxGeo = new THREE.BoxGeometry(1000, 950, 1000);
    this.skybox = new THREE.Mesh(skyboxGeo, materialArray);

    let planeGeometry = new THREE.PlaneGeometry( 250, 250, 1);
    let planeGeometrySide = new THREE.PlaneGeometry( 600, 500, 1 );

    // intro
    this.dashPlane = new THREE.Mesh(
      planeGeometrySide, 
        new THREE.MeshBasicMaterial({color: 0xebdfd5}).opacity = 0
      );

      
    this.dashElement1 = this.container.nextSibling; //intro

    this.elements = [
        [this.dashElement1, this.dashPlane],
        // [this.dashElement2, this.dashPlane2],
        // [this.dashElement3, this.dashPlane3]
      ]


      // info
      this.dashPlane.position.setX(-475);
      this.dashPlane.rotation.y = Math.PI/2;
      
      const myText = new Text();
    
      this.sceneRoom.add(myText);

      // Set properties to configure:
      myText.text =`We believe collectors of our project deserve to benefit more. That\'s why we\'ve changed minting for good.\n\nFor the first time ever, if you mint one of our NFTs, you can earn 50% of the royalties. 50% of the remaining royalties enter a dividends pool and will be paid out in ETH to owners who hold their NFTs in line with our schedule defined in the whitepaper.\n\nAll earnings can be tracked live on the Vault Dashboard to your left.\n\nWays to mint:\n1. Earn a spot on the Gods & Titans pre-sales list.\n2. Purchase a Gods & Titans NFT from the secondary market.`;
      myText.fontSize = 16;
      myText.anchorX = 'center';
      myText.anchorY = 'middle';
      myText.maxWidth = 700;
      myText.textAlign = 'center';
      myText.font =  'https://fonts.gstatic.com/s/philosopher/v9/vEFV2_5QCwIS4_Dhez5jcWBuT0s.woff'
      myText.position.z = 0;
      myText.position.x = 475;
      myText.position.y = 10;
      myText.rotation.y = -Math.PI/2;
      myText.color = 0x979086;
      myText.color = 0x736259;
      myText.outlineColor = 0x736259;
      myText.outlineWidth = .2;
      // myText.letterSpacing = .15;

      // Update the rendering:
      myText.sync();

    // add objects to room scene
    this.sceneRoom.add(this.dashPlane);
    // this.sceneRoom.add(this.dashPlane2);
    // this.sceneRoom.add(this.dashPlane3);
    this.skybox.rotateY( -90 * ( Math.PI / 180))
    this.sceneRoom.add(this.skybox);

    // add to site
    // this.sceneSite.add(this.sphere);

  }

  
  createFinalScene(){
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        progress: { value: 0 },
        sceneRoom: { value: null },
        sceneSite: { value: null },
        // isEntering: {value: 1}
      },
      vertexShader: shaderEnter.vertex,
      fragmentShader: shaderEnter.fragment,
    });

     this.materialExit = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        progress: { value: 0 },
        sceneRoom: { value: null },
        sceneSite: { value: null },
        // isEntering: {value: 1}
      },
      vertexShader: shaderExit.vertex,
      fragmentShader: shaderExit.fragment,
    });



    this.textureRoom = new THREE.WebGLRenderTarget(this.width,this.height, {
        format: THREE.RGBAFormat,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter
      });

    this.textureSite = new THREE.WebGLRenderTarget(this.width,this.height, {
        format: THREE.RGBAFormat,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter
      });

      

    this.geo = new THREE.PlaneBufferGeometry(1,1);
    this.meshFinal = new THREE.Mesh(this.geo,this.material);

    this.finalScene.add(this.meshFinal);


  }
  
   settings(){
    this.settingsOptions = {
      progress: 0,
    };

    // this.matrix = {
    //   rotateX: 0,
    //   rotateY: 0,
    //   rotateZ: 0,
    //   skewX: 0,
    //   skewY: 0,

    // }

    // this.gui = new dat.GUI();
    // this.gui.add(this.matrix, "rotateX", -360, 360, 0.01);
    // this.gui.add(this.matrix, "rotateY", -360, 360, 0.01);
    // this.gui.add(this.matrix, "rotateZ", -360, 360, 0.01);
    // this.gui.add(this.matrix, "skewX", -360, 360, 0.01);
    // this.gui.add(this.matrix, "skewY", -360, 360, 0.01);


  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
      this.mountFrame = this.frameId;
    }
  }

  animate() {
    
    //  camera on scroll logic
    this.camera.setRotationFromAxisAngle(new THREE.Vector3(0,1,0), this.state.currentAzimuth* ( Math.PI / 180));
     if(this.state.lockonVault){
        this.setState({ currentAzimuth:90 })
      }


    this.elements.forEach((planeInfo, i)=>{
      const divElement = planeInfo[0];
      const plane = planeInfo[1];

      // console.log(divElement, plane);

       // get the position of the center of the cube
      plane.updateWorldMatrix(true, false);
      plane.getWorldPosition(tempV);
      // tempRot = plane.rotation;
      tempRot.setFromRotationMatrix(plane.modelViewMatrix);
      tempScale.setFromMatrixScale(plane.modelViewMatrix)

      // console.log(tempRot)
      // tempRot.project(this.camera);
      tempRot.x = toDegrees(tempRot.x)
      tempRot.y = toDegrees(tempRot.y)
      tempRot.z = toDegrees(tempRot.z)
  

      // get the normalized screen coordinate of that position
      // x and y will be in the -1 to +1 range with x = -1 being
      // on the left and y = -1 being on the bottom
      tempV.project(this.camera);

      // ask the raycaster for all the objects that intersect
      // from the eye toward this object's position
      raycaster.setFromCamera(tempV, this.camera);
      const intersectedObjects = raycaster.intersectObjects(this.sceneRoom.children);

      // We're visible if the first intersection is this object.
      const show = intersectedObjects.length && plane === intersectedObjects[0].object;

       if (!show || Math.abs(tempV.z) > 1 || hideDiv) {
      // hide the label
        divElement.style.display = 'none';
      } else {
        // unhide the label
        divElement.style.display = 'block';
    

        this.width =  this.container.clientWidth;
        this.height =  this.container.clientHeight;

        // convert the normalized position to CSS coordinates
        const x = (tempV.x *  .5 + .5) * this.container.clientWidth;
        const y = (tempV.y * -.5 + .5) * this.container.clientHeight;
        // const z = (tempV.z * -.5 + .5) * this.container.clientHeight;
        // console.log(tempV.z)

      
        // let planeRotation = this.dashPlane.normalMatrix;
        // console.log(planeRotation.elements );

        // move the elem to that position
        // this.dashElement.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px) `;
        // divElement.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
        //  scaleX(${tempScale.x}) scaleY(${tempScale.y}) scaleZ(${tempScale.z}) 
          divElement.style.transform = `
                                    scaleX(1) scaleY(${tempScale.y}) scaleZ(${tempScale.z}) 
                                    rotateX(${-tempRot.x}deg) rotateY(${-tempRot.y}deg) rotateZ(${-tempRot.z}deg) 
                                    translate(-50%, -40%) 
                                    translateX(${x}px) translateY(${y}px) translateZ(${-475}px) 
                                    skewX(${0}deg) skewY(${0}deg)`;
          // divElement.style.position = `fixed`;
          // divElement.style.top = `0`;
        // divElement.style.transform = `
        //                             scaleX(1) scaleY(1) scaleZ(1) 
        //                             rotateX(${this.matrix.rotateX}deg) rotateY(${this.matrix.rotateY}deg) rotateZ(${this.matrix.rotateZ}deg) 
        //                             translate(-50%, -50%) 
        //                             translateX(${x}px) translateY(${y}px) translateZ(0px) 
        //                             skewX(${this.matrix.skewX}deg) skewY(${this.matrix.skewY}deg)`;

                                 
        // // set the zIndex for sorting
        divElement.style.zIndex = (-tempV.z * .5 + .5) * 100000 | 0;

        }
    });


    // load in logic
    if (this.frameId > 10 + this.mountFrame && this.tween1){
      this.tween1 = false;
      gsap.to(this.settingsOptions, {
        duration:1.5,
        delay: 0,
        progress: 1.0
      });
      
      if (this.container.nextElementSibling) this.container.nextElementSibling.classList.add("fade-in");
      if (this.container.firstChild) this.container.firstChild.classList.add("fade-in");
      if (this.container.firstChild) this.container.nextElementSibling.nextElementSibling.classList.add("fade-in-scroll");

      setTimeout(() => { 
                      this.tween2 = true;
                      console.log('mesh switched step 1');
                      this.container.firstChild.style.opacity = '1';
                      this.container.nextSibling.style.opacity = '1';
                      this.container.nextSibling.nextSibling.style.opacity = '.65';
                      
                    }, 1500);
   
    }

    if(this.tween2 && this.debounce){
        this.debounce = false;
        
        this.meshFinal.material = this.materialExit;
        this.settingsOptions.progress = 0;
        // this.finalScene.add(this.meshFinal);
        console.log('mesh switched step 2');
        if (this.container.nextElementSibling) this.container.nextElementSibling.classList.remove("fade-in"); 
        if (this.container.nextElementSibling.nextElementSibling) this.container.nextElementSibling.nextElementSibling.classList.remove("fade-in-scroll"); 

    }
   
   
  
     if (!this.tween2){
      this.renderer.setRenderTarget(this.textureRoom);
      this.renderer.render(this.sceneRoom, this.camera);

      this.renderer.setRenderTarget(this.textureSite);
      this.renderer.render(this.sceneSite, this.cameraSite);
    } else{
        this.renderer.setRenderTarget(this.textureSite);
      this.renderer.render(this.sceneSite, this.cameraSite);

      this.renderer.setRenderTarget(this.textureRoom);
      this.renderer.render(this.sceneRoom, this.camera); 

     }

    if (!this.tween2){
       this.material.uniforms.sceneRoom.value = this.textureRoom.texture;
       this.material.uniforms.sceneSite.value = this.textureSite.texture;
      this.material.uniforms.progress.value = this.settingsOptions.progress;
      // console.log(this.material.uniforms.progress.value);
    }else{
        
        this.materialExit.uniforms.sceneSite.value = this.textureSite.texture;
        this.materialExit.uniforms.sceneRoom.value = this.textureRoom.texture;
        this.materialExit.uniforms.progress.value = this.settingsOptions.progress;
        // console.log(this.materialExit.uniforms.progress.value);
    }
    
    // this.controls.update();
    this.frameId = requestAnimationFrame(this.animate);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.finalScene, this.finalCamera);
  }

  callBack(){
    this.props.callBackFunc();
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }


  handleWindowResize() {
    this.leaveDash()

    /////resize logic/////
    // this.width = window.innerWidth;
    // this.height = window.innerHeight;
    // console.log(this.width,this.height)

    
    // this.renderer.setSize(this.width, this.height);
    // this.camera.aspect = this.width/ this.height;
    // this.cameraSite.aspect = this.width/ this.height;
    // this.finalCamera.aspect = this.width/ this.height;


    // this.camera.updateProjectionMatrix();
    // this.cameraSite.updateProjectionMatrix();
    // this.finalCamera.updateProjectionMatrix();

    // if (this.width < 900 && resizeDebounce) { 
    //   resizeDebounce = false
    //   console.log('leave dash')

    //   this.leaveDash();

    //  }

    /////////////////////
  }

  componentWillUnmount() {
    this.stop();
    this.destroyContext();
  }

  destroyContext() {
    this.container.removeChild(this.renderer.domElement);
    this.container.remove();
    // this.renderer.forceContextLoss();
    console.log('successful unmount');
  }

    leaveDash(){
        window.removeEventListener("resize", this.handleWindowResize);
        if( this.container.firstChild) {
          this.container.firstChild.classList.remove('fade-in');
          this.container.firstChild.classList.add("fade-out");
          this.container.firstChild.style.opacity = '0';
        }

        if( this.container.nextElementSibling) this.container.nextElementSibling.classList.add("fade-out"); 
        if( this.container.nextElementSibling.nextElementSibling) this.container.nextElementSibling.nextElementSibling.classList.add("fade-out-scroll"); 
  

       
        setTimeout(() => {  
         if( this.container.nextElementSibling) this.container.nextElementSibling.style.opacity = '0';
         if( this.container.nextElementSibling.nextElementSibling) this.container.nextElementSibling.nextElementSibling.style.opacity = '0';
        }, 500);
         
      
        gsap.to(
          this.settingsOptions, {
              duration:1.5,
              delay: 0.5,
              progress: 1

            });
          
            setTimeout(() => {  
              this.callBack();
              //  this.componentWillUnmount();
            }, 1500);
  }


  render() {

    return (
      <div id='canvasContainer'
        style={{
          position: 'relative',  /* makes this the origin of its children */
          width: '100vw',
          height:' 100vh',
          overflow: 'hidden',
        }}

      >

        <div id='canvas'
          ref={(container ) => {
            this.container = container;
            // this.dashElement = dashboard;
          }}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}>
            {/* first child */}
            <TopBar>
              {/* toggle vault lock */}
              <ToggleWrap onClick={()=>{
                  this.setState({ lockonVault: this.props.lockToggler() });
              }}>
                <div style={{width: '100%',marginTop: '.5rem', display:'flex',alignItems:'center'}}>
                <InputBox 
                  type={'checkbox'} 
                  checked={ this.state.lockonVault}
                   onChange={(event) => {}}
                   />
                <ToggleText>Lock on dashboard</ToggleText>
                </div>
                 <ToggleText style={{marginTop: '.5rem', marginLeft:'-3rem'}}>LIVE ON MINT DATE</ToggleText>
              </ToggleWrap>

              {/* Travel Back */}
              <BtnWrapper>
                  <TravelBtn>
                      <CloseIcon src={'/icons/close.png'} onClick={ this.leaveDash }/>
                  </TravelBtn>
              </BtnWrapper>
            </TopBar>
          </div>

              {/* first sibling */}
            {/* dashbaord */}
          <ElementWrapper style={{
            opacity: '0'
          }}>
            <Element>
                <DashBoard />
            </Element>
          </ElementWrapper>


          {/* last sibling */}
          {/* scroll bar */}
           <ScrollWrapper>
              <ScrollBar type='range' value={-this.state.currentAzimuth} min="-90" max="90" 
              onChange={(e)=>{
                if(!this.state.lockonVault)
                  {let newValue = -e.target.value
                  this.setState({currentAzimuth: newValue});}
              }}
          />
           </ScrollWrapper>

         
         </div>
    );
  }
}

export default MintDash;

// ------------- HELP FUNCTIONS ------------------------------

function toDegrees(rad) {
  let deg = Math.round(rad * (180 / Math.PI));
  return deg;
}

// returns array of paths to side images
function createPathStrings() {
  const basePath = "/Assets/skybox2/"
  const baseFilename = basePath;
  const fileType = ".jpg";
  const sides = ["front", "back", "top", "bottom", "right", "left"];
  const pathStings = sides.map(side => {
    return baseFilename + side + fileType;
  });

  // console.log(pathStings);
  return pathStings;
}

// returns an array of materials.
function createMaterialArray() {
  const skyboxImagepaths = createPathStrings();
  const materialArray = skyboxImagepaths.map(image => {
    let texture = new THREE.TextureLoader().load(image);
    texture.wrapS = THREE.RepeatWrapping; 
    texture.repeat.x = - 1;

     return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
  return materialArray;
}




//  -------------- STYLES -------------------------

const ElementWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  min-width: 700px;
  display: none; 
`

const Element = styled.div`
   transform-style: preserve-3d;
  perspective: 100px;
   perspective-origin: 500% 500%;
`
const TopBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* background-color: red; */
    opacity: 0;
`

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
  -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
  /* width: max-content;
  height: max-content; */


  &:hover{
    cursor: pointer;
  }

`
const InputBox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* create custom checkbox appearance */
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 2px;
    /* background-color only for content */
    background-clip: content-box;
    border: 2px solid white;
    border-radius: 6px;
    background-color: transparent;
    margin: 0 1rem;
    /* margin-left: 15px;
    margin-right: 15px; */

  &:hover{
    cursor: pointer;
  }
   

    &:checked{
        background-color: white;
    }

    &:focus{
        outline: none !important;
    }


`
const ToggleText = styled.h3`
  text-transform: uppercase;
  color: white;
  margin-left: -.5rem;

`

const BtnWrapper = styled.div`
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
`

// const CloseIcon = styled(IoMdCloseCircleOutline)`
const CloseIcon = styled.img`
  width: 100%;
  height: 100%;
  opacity: .95;
  transition: all .1s ease-in-out;
  cursor: pointer;
  &:hover{
    
     opacity: 1;
  }
`

const TravelBtn = styled.button`
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: .5rem;
  font-size: 1rem;
  border: none;
  font-weight: 100;

`

const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 40px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: .5rem;
   transition: opacity ease-in .2s;
   opacity: 0;

  &:hover{
    opacity: 1;
  }

`

const ScrollBar = styled.input`

  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;

&:focus {
  outline: none;
}
&::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: rgba(0,0,0,.75);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
&::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 36px;
  border-radius: 100%;
  background-image: url('./images/token.png');
    background-size: cover;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
&:focus::-webkit-slider-runnable-track {
  background: rgba(0,0,0,.75);
}
&::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: rgba(0,0,0,.75);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
&::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 36px;
   border-radius: 100%;
   background-image: url('./images/token.png');
     background-size: cover;
  /* background: #ffffff; */
  cursor: pointer;
}
&::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
&::-ms-fill-lower {
  background: rgba(0,0,0,.75);
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&::-ms-fill-upper {
  background: rgba(0,0,0,.75);
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 36px;
  border-radius: 100%;
  background-image: url('./images/token.png');
  background-size: cover;
  /* background: #ffffff; */
  cursor: pointer;
}
&:focus::-ms-fill-lower {
  background: rgba(0,0,0,.75);
}
&:focus::-ms-fill-upper {
  background: rgba(0,0,0,.75);
}
`
