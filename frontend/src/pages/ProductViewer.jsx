import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../components/Scene';
import CanvasLoader from '../components/CanvasLoader';
import { fetchProductById } from '../api';

const ProductViewer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductById(productId)
      .then(response => setProduct(response.data))
      .catch(err => setError('Failed to load product details.'));
  }, [productId]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!product) return <p>Loading 3D Model...</p>;

  return (
    <div>
      <Link to="/" className="back-button">&larr; Back to Gallery</Link>
      <div className="viewer-container">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense fallback={<CanvasLoader />}>
              <Scene modelUrl={product.model_url} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${parseFloat(product.price).toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductViewer;