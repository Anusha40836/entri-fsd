import React, { useEffect, useState } from "react";
import Axios from "axios";

function FetchingData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const listItems = posts.map((eachItem) => (
    <li key={eachItem.id}>{eachItem.body}</li>
  ));
  return (
    <>
      <h1>Data Feching Using Axios</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default FetchingData;
