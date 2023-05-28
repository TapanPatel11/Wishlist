import React, { useState } from 'react';
import PostCard from './PostCard';
import './PostingsPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostingsPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleSavePost = (post) => {
    setWishlist([...wishlist, post]);
    toast.success(post.title+' added to wishlist!');

  };

  const postings = [
    {
      id: 1,
      title: 'Dummy Post 1',
      description: 'This is the first dummy post.',
    },
    {
      id: 2,
      title: 'Dummy Post 2',
      description: 'This is the second dummy post.',
    },
    {
      id: 3,
      title: 'Dummy Post 3',
      description: 'This is the third dummy post.',
    }
  ];

  return (
    <div className="postings-page">
      <h2>Postings</h2>
      <div className="post-grid">
        {
        postings.map((post) => (
          <PostCard key={post.id} post={post} onSave={handleSavePost} />
        ))}
      </div>
      <div className="wishlist">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
    
  );
};

export default PostingsPage;
