import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [data, setData] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [postId]);
  return (
    <>
      <h1>Post By User {data.userId}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
};

export default PostPage;
