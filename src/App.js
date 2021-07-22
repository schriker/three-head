import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import Model from './Model';
import Loader from './Loader';

function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Model />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export default App;
