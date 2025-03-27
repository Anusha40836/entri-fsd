import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetch() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // return response.data;
        setPost(response.data);
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let listItems = post.map((eachItem) => (
    <li key={eachItem.id}>{eachItem.title}</li>
  ));
  return (
    <>
      <h1>Data Fetching</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default DataFetch;
