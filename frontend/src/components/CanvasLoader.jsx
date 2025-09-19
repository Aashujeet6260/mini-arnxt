import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="loader">{progress.toFixed(2)}% loaded</span>
    </Html>
  );
};

export default CanvasLoader;