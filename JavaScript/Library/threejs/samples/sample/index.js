import * as THREE from "three";
const target = document.querySelector("#myCanvas");
const video = document.createElement("video");

const srcs = ["About.mp4", "Works.mp4", "Blogs.mp4", "Contact.mp4"];
let index = 0;
// ミュートに設定
video.src = `./video/${srcs[index]}`;
video.setAttribute("muted", "muted");
video.setAttribute("autoplay", "autoplay");
video.setAttribute("loop", "loop");
video.setAttribute("playsinline", "playsinline");
video.preload = "metadata";
video.load();
video.play();

// const video = document.querySelector(".video");
// video.src = "./video/About.mp4";
// video.muted = true;
// video.playsinline = true;
// video.load();
// video.play();
const renderer = new THREE.WebGLRenderer({
  canvas: target,
});
// const w = window.innerWidth; //px
const w = target.clientWidth; //px
// const h = window.innerHeight; //px
const h = target.clientHeight; //px
renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);

// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
camera.position.set(0, 0, 1000);

// メッシュの形状
const geometry = new THREE.PlaneGeometry(
  target.clientWidth,
  target.clientHeight
);
//メッシュの質感
// ローダーの作成
const videoTexture = new THREE.VideoTexture(video);
videoTexture.minFilter = THREE.LinearFilter;
const material = new THREE.MeshPhongMaterial({
  map: videoTexture,
});
// メッシュの作成
const panel = new THREE.Mesh(geometry, material);
panel.name = "panel";
scene.add(panel);

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
  // box.rotation.x += 0.01;
  // box.rotation.y += 0.01;

  // レンダリング
  renderer.render(scene, camera);
}

// 動画の切り替え
const changeVideo = () => {
  console.log(index);
  index++;
  if (index >= 4) {
    index = 0;
  }
  // リソースの再登録
  let newVideo = document.createElement("video");
  newVideo.src = `./video/${srcs[index]}`;
  newVideo.setAttribute("muted", "muted");
  newVideo.setAttribute("autoplay", "autoplay");
  newVideo.setAttribute("loop", "loop");
  newVideo.setAttribute("playsinline", "playsinline");
  const panel = scene.getObjectByName("panel");
  panel.material.map = new THREE.VideoTexture(newVideo);
};

// クリックイベントの登録
target.addEventListener("click", changeVideo);
