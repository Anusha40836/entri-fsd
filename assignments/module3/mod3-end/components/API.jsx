import React, { useEffect, useState } from "react";

function API() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
        setLoading(false); //stop loading
      })
      .catch(function (error) {
        console.log("Errr fetching data:", error);
        setLoading(false);
      });
  }, []); // empty dependency array = run once when component mounts

  if (loading) {
    return <p>Loading users....</p>;
  }

  return (
    <div>
      <h1>Fetching data from API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>-{post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default API;
