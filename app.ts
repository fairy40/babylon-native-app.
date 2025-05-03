// Babylon.js - Código TypeScript para Babylon Native

const createScene = async function () {
  const scene = new BABYLON.Scene(engine);

  // Luz
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
  light.intensity = 1.2;

  // Câmera
  const camera = new BABYLON.ArcRotateCamera("cam", Math.PI / 2, Math.PI / 4, 8, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(true);

  // Cubo flutuante
  const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
  box.position.y = 1.5;

  // Esfera girando
  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1.2 }, scene);
  sphere.position.y = 0;

  // Skydome simples
  const sky = BABYLON.MeshBuilder.CreateSphere("sky", { diameter: 100, sideOrientation: BABYLON.Mesh.BACKSIDE }, scene);
  const skyMat = new BABYLON.StandardMaterial("skyMat", scene);
  skyMat.diffuseColor = new BABYLON.Color3(0.1, 0.3, 0.6);
  sky.material = skyMat;

  // Animação
  scene.registerBeforeRender(() => {
    box.position.y = 1.5 + Math.sin(performance.now() * 0.002) * 0.3;
    sphere.rotation.y += 0.01;
  });

  return scene;
};

createScene();
