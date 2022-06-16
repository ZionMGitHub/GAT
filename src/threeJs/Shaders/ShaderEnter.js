export const vertex = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

export const fragment = `
uniform float time;
uniform float progress;
uniform sampler2D sceneRoom;
uniform sampler2D sceneSite;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
vec4 finalTexture;
vec4 sRoom; 
vec4 sSite;


vec2 distort(vec2 olduv, float pr, float expo){
  vec2 p0 = 2.*olduv - 1.;
  vec2 p1 = p0/(1. - pr*length(p0)*expo);

  return (p1 + 1.)*0.5;
}


void main()	{

  float progress1 = smoothstep(0.4, 1.,progress);

  vec2 uv1 = distort(vUv,
     -10.*pow(0.5 + 0.5*progress, 32.), 
     progress*4.);

  vec2 uv2 = distort(vUv, 
    -10.*(1. - progress1), 
    progress*4.);
  

    sRoom = texture2D(sceneRoom, uv2);
    sSite = texture2D(sceneSite, uv1);

  float mixer = progress1;

	gl_FragColor = vec4(vUv,0.0,1.);
	gl_FragColor = sRoom;



     finalTexture = mix(sSite,sRoom, mixer);

	gl_FragColor = finalTexture;
}
`;
