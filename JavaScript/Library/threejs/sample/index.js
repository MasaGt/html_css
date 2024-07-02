import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
const w = window.innerWidth; //px
const h = window.innerHeight; //px
renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);

// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
camera.position.set(0, 0, 1000);

// メッシュの形状
const geometry = new THREE.BoxGeometry(500, 500, 500);
//メッシュの質感
const material = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
});
// メッシュの作成
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// ライトの作成
const light = new THREE.DirectionalLight(0xffffff);
light.intensity = 2; // 光の強さを倍に
light.position.set(1, 1, 1); // ライトの方向
scene.add(light);

// レンダリング
renderer.render(scene, camera);

// アニメーション
tick();

function tick() {
  requestAnimationFrame(tick);

  // 箱を回転させる
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  // レンダリング
  renderer.render(scene, camera);
}
