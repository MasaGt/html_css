import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeSample = () => {
  // canvas要素への参照
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 初期処理 3D関連の準備
  useEffect(() => {
    if (canvasRef.current === null) return;

    // シーンの作成
    const scene = new THREE.Scene();

    // カメラの作成
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    // 3Dオブジェクトの作成
    const geo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();
    const obj = new THREE.Mesh(geo, material);
    scene.add(obj);

    // レンダラーの作成
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);

    function animation(time: number) {
      obj.rotation.x = time / 2000;
      obj.rotation.y = time / 1000;
      renderer.render(scene, camera);
    }
  }, []);
  return (
    <>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </>
  );
};
