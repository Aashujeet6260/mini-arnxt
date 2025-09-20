import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../api';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image_url} alt={product.name} />
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p className="price">${parseFloat(product.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.log(err)
        setError('Failed to fetch products. Ensure the backend server is running.', err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Product Gallery</h2>
      <div className="gallery-container">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default ProductGallery;