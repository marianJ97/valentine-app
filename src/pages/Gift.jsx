/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";
import { Title } from "../components/Title";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  const meshRef = useRef();
  const materials = useLoader(MTLLoader, "/008.mtl");

  useEffect(() => {
    materials.preload();
  }, [materials]);

  const obj = useLoader(OBJLoader, "/model.obj", (loader) => {
    loader.setMaterials(materials);
  });
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <primitive
      {...props}
      ref={meshRef}
      object={obj}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    />
  );
}

export const Gift = () => {
  return (
    <Layout>
      <Title
        title={"Here is the gift"}
        text={"Its my heart (if you click on it, it will get bigger)"}
      />
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <p style={{ fontSize: 25 }}>💗 Love YOU Kathy 💗</p>
    </Layout>
  );
};
