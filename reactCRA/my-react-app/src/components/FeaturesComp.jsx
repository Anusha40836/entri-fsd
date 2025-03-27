import React from "react";
import { useParams } from "react-router-dom";

function FeaturesComp() {
  const params = useParams();
  return (
    <>
      <h1>I am a Features Component</h1>
      <h2>Features Id is: {JSON.stringify(params)}</h2>
    </>
  );
}

export default FeaturesComp;
