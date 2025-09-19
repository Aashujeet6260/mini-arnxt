import { Routes, Route } from 'react-router-dom';
import ProductGallery from './pages/ProductGallery';
import ProductViewer from './pages/ProductViewer';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Product Viewer</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductGallery />} />
          <Route path="/product/:productId" element={<ProductViewer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;