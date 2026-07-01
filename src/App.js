import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./components/Home'));
const Videos = lazy(() => import('./components/Videos'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div style={{ padding: 24 }}>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
