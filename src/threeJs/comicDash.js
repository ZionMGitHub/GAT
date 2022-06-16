import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shaderEnter from "./Shaders/ShaderEnter";
import * as shaderExit from "./Shaders/ShaderExit";
import styled from 'styled-components';
// import * as dat from "dat.gui";
import gsap from 'gsap';
import {ComicDashboard} from '../components/comicverseComponents/comicverseDashboard'
import { IoCloseSharp } from 'react-icons/io5';

class ComicDash extends Component {

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
    this.toggleCloseBtn = this.toggleCloseBtn.bind(this);

    this.tween1 = true;
    this.tween2 = false;
    this.debounce = true;

    this.state = {
        showCloseBtn: true
    }
    // this.lockDash
  }

  componentWillMount() {
    // window.addEventListener("resize", this.handleWindowResize);
    // console.log('mounted');
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    // console.log('mounted');
    this.setupScene();
  }

  setupScene() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.physicallyCorrectLights = true;

    this.container.appendChild(this.renderer.domElement);

    this.sceneRoom = new THREE.Scene();
    this.sceneSite = new THREE.Scene();
    this.finalScene = new THREE.Scene();

    this.skyRadius = 100;

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
    // this.camera.position.set(0,-this.skyRadius/2,50);
    // this.camera.position.set(0, -this.skyRadius*.25,  (this.skyRadius * .65)/2);


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
  

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // zoom controls
    this.controls.minDistance = 70;
    this.controls.maxDistance = 70;


    // // vertical change controls
    this.controls.minPolarAngle = 100 * ( Math.PI / 180);
    this.controls.maxPolarAngle = 100 * ( Math.PI / 180);

    // // horizontal controls change controls
    this.controls.minAzimuthAngle = 0 * (  Math.PI / 180);
    this.controls.maxAzimuthAngle = 0 * (  Math.PI  / 180);

    this.controls.enablePan = false;
    this.controls.update();

    // this.scene.add(this.light);
    // this.scene.add(this.camera);
  }


  addObjects() {
    
    // const skyCylinderGeo = new THREE.CylinderGeometry(this.skyRadius,this.skyRadius * .78,this.skyRadius,64,1,false, Math.PI * 2/6, Math.PI * 8/6);
    const skyCylinderGeo = new THREE.CylinderGeometry(this.skyRadius,this.skyRadius * .65,this.skyRadius,64,1,false, Math.PI * 2, Math.PI *2);

    // let texture = new THREE.TextureLoader().load('/Assets/comicsky/view4.png');
    let texture = new THREE.TextureLoader().load('/Assets/comicsky/view2.png');

    // texture.wrapS = THREE.RepeatWrapping; 
    // texture.repeat.x = - 1;
    let innerMaterial = new  THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });


    texture = new THREE.TextureLoader().load('/Assets/comicsky/top2.jpg');
    //  texture.wrapS = THREE.RepeatWrapping; 
    // texture.repeat.x = - 1;
    let topMaterial = new  THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });

    texture = new THREE.TextureLoader().load('/Assets/comicsky/bottom3.jpg');
    let bottomMaterial = new  THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide });

    this.skybox = new THREE.Mesh(skyCylinderGeo, [innerMaterial]);

    let planeGeometry = new THREE.CircleGeometry( this.skyRadius * .65, 128);
    let planeGeometry2 = new THREE.CircleGeometry( this.skyRadius , 128);

    // 3d model platform
    this.skyBoxBottom = new THREE.Mesh(
      planeGeometry, 
      bottomMaterial
      );

    this.skyBoxTop = new THREE.Mesh(
      planeGeometry2, 
      topMaterial
    );

    // let sphereGeometry = new THREE.SphereBufferGeometry( this.skyRadius,);

    // this.sphere = new THREE.Mesh(
    //   sphereGeometry, 
    //   new THREE.MeshBasicMaterial({
    //     map: new THREE.TextureLoader().load("/Assets/view2.png"),
    //     side: THREE.BackSide
    //   })
    //   );


    this.skyBoxBottom.position.set(0,-this.skyRadius/2,0)
    this.skyBoxBottom.rotation.x = -Math.PI/2;
    this.skyBoxTop.position.set(0,this.skyRadius/2,0)
    this.skyBoxTop.rotation.x = -Math.PI/2;
    
    this.pivot = new THREE.Group();
    this.sceneRoom.add( this.pivot );
    this.pivot.add(this.skyBoxBottom);
    this.pivot.add(this.skyBoxTop);
    this.pivot.add(this.skybox);

    // this.sceneRoom.add(this.skyBoxBottom);
    // this.sceneRoom.add(this.skyBoxTop);
    // this.sceneRoom.add(this.skybox);
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

    // this.gui = new dat.GUI();
    // this.gui.add(this.settingsOptions, 'progress', 0, 1, 0.01);

  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
      this.mountFrame = this.frameId;
    }
  }

  animate() {
  
  if (this.frameId > 10 + this.mountFrame && this.tween1){
        this.tween1 = false;
        gsap.to(this.settingsOptions, {
          duration:1.5,
          delay: 0,
          progress: 1.0
      });

    this.container.firstChild.classList.add("fade-in-comic");
    this.container.nextSibling.classList.add("fade-in");

    setTimeout(() => { 
                    this.tween2 = true;
                    // console.log('mesh switched step 1');
                    this.container.firstChild.style.opacity = '.85';
                    this.container.nextSibling.style.opacity = '1';

                  }, 1500);
    }

    if(this.tween2 && this.debounce){
        this.debounce = false;
      
        this.meshFinal.material = this.materialExit;
        this.settingsOptions.progress = 0;
  
        // this.finalScene.add(this.meshFinal);
        // console.log('mesh switched step 2');
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

    this.pivot.rotation.y += 0.001;
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
    this.leaveDash();
    // this.renderer.setSize(this.width, this.height);
    // this.camera.aspect = this.width/ this.height;
    // this.cameraSite.aspect = this.width/ this.height;

    // this.camera.updateProjectionMatrix();
    // this.cameraSite.updateProjectionMatrix();

  }

  //toggle close btn for comicverse
  toggleCloseBtn(value) {
    this.setState({showCloseBtn: value});

    // console.log('toggled', value)
  }


  componentWillUnmount() {
    this.stop();
    this.destroyContext();
  }

  destroyContext() {
    this.container.removeChild(this.renderer.domElement);
    this.container.remove();
    // this.renderer.forceContextLoss();
    // console.log('successful unmount');
  }

  leaveDash(){
    window.removeEventListener("resize", this.handleWindowResize);
    this.container.firstChild.classList.remove('fade-in-comic');
    this.container.nextSibling.classList.remove('fade-in');

    this.container.firstChild.classList.add("fade-out-comic");
    this.container.firstChild.style.opacity = '0';

    this.container.nextSibling.classList.add("fade-out");
    this.container.nextSibling.style.opacity = '0';

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
          //  zIndex: 100,
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
            <BtnWrapper showClose={this.state.showCloseBtn}>
                <TravelBtn 
                onClick={this.leaveDash}>
                 <CloseIcon/>
                </TravelBtn>
            </BtnWrapper>
          </div>

          <ComicDashboard id={'comicverse'} style={{zIndex:'11'}} toggleCloseBtn={this.toggleCloseBtn}/>
         </div>
    );
  }
}

export default ComicDash;


const CloseIcon = styled(IoCloseSharp)`
  width: 100%;
  height: 100%;
`

const BtnWrapper = styled.div`
    z-index: ${({showClose})=>(showClose ? '10':'0')};
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;
`

const TravelBtn = styled.button`
 
  width: 100%;
  height: 100%;
  background-color: #010b38;
  border: 1px solid white;
  padding: .5rem;
  font-size: 1rem;
  font-family: "Skia"; 
  /* font-family: 'https://fonts.gstatic.com/s/philosopher/v9/vEFV2_5QCwIS4_Dhez5jcWBuT0s.woff'; */
  font-weight: 100;
  color: white;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover{
    
    /* color: #7E746F; */
    background-color: #1D2A60;
  }
`

function toDegrees(rad) {
  let deg = Math.round(rad * (180 / Math.PI));
  return deg;
}

