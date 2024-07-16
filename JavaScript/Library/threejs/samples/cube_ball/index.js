const target = document.getElementById("canvas");

// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(
  75, // 視野角
  window.innerWidth / window.innerHeight, // アスペクト比
  0.1, // カメラの開始
  1000 // カメラの終端
);
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

// 座標ヘルパーの作成
const axes = new THREE.AxesHelper(100);
scene.add(axes);

// レンダラーの作成
const renderer = new THREE.WebGLRenderer({
  canvas: target,
});
renderer.setClearColor(new THREE.Color(0xffffff));
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// 平面なオブジェクトの作成
const planeGeometry = new THREE.PlaneGeometry(60, 20);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotation.x = -0.5 * Math.PI;
// オブジェクトをシーンに追加
scene.add(planeMesh);

// ボックスのオブジェクトの作成
const cubeGeometry = new THREE.BoxGeometry(4, 4, 4); // 幅、高さ、奥行きが全て4
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
}); // 赤色で骨組みが見えるように
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.x = -4;
cubeMesh.position.y = 3;
cubeMesh.position.z = 0;
scene.add(cubeMesh);

// ボールオブジェクトの追加
const sphereGeometry = new THREE.SphereGeometry(4, 20, 20); //半径が4で、水平方向、垂直方向にしようされるセグメントの数がどちらも20
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x7777ff,
  wireframe: true,
}); //青色で骨組みが見えるように
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;
scene.add(sphere);

// レンダリング
renderer.render(scene, camera);
