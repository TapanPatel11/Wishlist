import React from 'react';
import './wishlist.css';


const Wishlist = ({ items, removeFromWishlist }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      {items.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
