import React from 'react';
import './PostCard.css';

const PostCard = ({ post, onSave }) => {
  const handleSave = () => {
    onSave(post);
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PostCard;
