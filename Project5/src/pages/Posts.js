import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments"; // Assurez-vous d'importer le composant Comments
import "../css/Posts.css";

function Posts({ user }) {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);
  console.log(postId);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((p) => p.userId === user.id);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [user]);

  const handleCommentsClick = (postId) => {
    setSelectedPostId(postId);
    setAreCommentsOpen(true);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };
  const handleCloseCommentsClick = (postId) => {
    setSelectedPostId(null);
    setAreCommentsOpen(false);
  };
  const handlePostClick = (postId) => {
    navigate(`/Posts/${postId}`);
  };

  return (
    <div>
      <div className="posts-container">
        {posts.map((post) => (
          <div
            onClick={() => handlePostClick(post.id)}
            key={post.id}
            className={postId == post.id ? "selected-post post" : "post"}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>                      
            <button onClick={() => handleCommentsClick(post.id)}>
              View Comments
            </button>           
          </div>
        ))}

      </div>
      <Comments isOpen={areCommentsOpen} onClose={handleCloseCommentsClick} comments={comments} />

    </div>
  );
}

export default Posts;

