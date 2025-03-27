import React, { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function DataFetchingDemo() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        setPosts(response.data);
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const listOfPosts = posts.map((eachItem) => (
    <li key={eachItem.id}>{eachItem.body}</li>
  ));
  return (
    <>
      <h1>Data Feching</h1>
      <ul>
        {listOfPosts ? (
          listOfPosts
        ) : (
          <Backdrop open>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </ul>
    </>
  );
}

export default DataFetchingDemo;
