import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostingsPage from './PostingsPage';
import WishlistPage from './WishlistPage';


function App() {
  return (
    <Router>
      <div className="app">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Postings</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<PostingsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
