async function init() {
  // canvas要素の取得
  const target = document.getElementById("canvas");

  // シーンの作成
  const scene = new THREE.Scene();

  // カメラの作成
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // カメラのポジション設定
  camera.position.set(0, 0, 10);

  const loadFile = async (url, data) => {
    const res = await fetch(url);
    data = await res.text();
    console.log(data);
  };

  // シェーダーの読み込み
  const vertexSource = await loadFile("./vshader.glsl");
  let fragmentSource = await loadFile("./fshader.glsl");
  console.log("loaded");

  //　オブジェクトの作成
  const geo = new THREE.PlaneGeometry(1, 1);
  const mat = new THREE.ShaderMaterial({
    vertexShader: vertexSource,
    fragmentShader: fragmentSource,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // レンダラーの作成
  const renderer = new THREE.WebGLRenderer({ canvas: target });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
}

init();
