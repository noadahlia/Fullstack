// Comments.js
import React from "react";
import "../css/Comments.css"; // Ajoutez le style CSS pour les commentaires si nécessaire

function Comments({ isOpen, onClose, comments }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="comments-overlay">
      <div className="comments">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h4>Comments:</h4>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>"Name: " {comment.name}</p>
            <p>"Email: " {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
