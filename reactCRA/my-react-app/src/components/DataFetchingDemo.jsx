import React, { useEffect, useState } from "react";

import axios from "axios";

function DataFetchingDemo() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  let listOfItems = posts.map((eachItem) => (
    <li key={eachItem.id}>{eachItem.email}</li>
  ));
  return (
    <>
      <h1>Data Fetching Using Axios</h1>
      <ul>{listOfItems}</ul>
    </>
  );
}

export default DataFetchingDemo;
