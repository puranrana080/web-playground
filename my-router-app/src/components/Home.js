import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink className="post-title" style={{display:"block"}} to={`/post/${post.id}`} key={post.id}>{post.title} </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
