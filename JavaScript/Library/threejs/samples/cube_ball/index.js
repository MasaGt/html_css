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
// planeMesh.rotation.z = -0.5 * Math.PI;

// オブジェクトをシーンに追加
scene.add(planeMesh);

// レンダリング
renderer.render(scene, camera);
