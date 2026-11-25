import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const fov = 75;
const aspect_ratio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.setZ(10);

const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const box_geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
   color: 0xFF0000,
})

const my_box = new THREE.Mesh(box_geometry, material);
scene.add(my_box);

const directional_light = new THREE.DirectionalLight(0xFFFFFF);
directional_light.rotation.x = 0.3;
directional_light.rotation.y = 0.3;
const ambient_light = new THREE.AmbientLight(0xFFFFFF);
scene.add(directional_light, ambient_light);

function game_loop() {
   requestAnimationFrame( game_loop );
   {
      my_box.rotation.x += 0.01;
      my_box.rotation.y += 0.001;
   }
   renderer.render(scene, camera);
}

function main() {
   game_loop();
}
main();
