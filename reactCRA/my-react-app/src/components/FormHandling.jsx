import React, { useState } from "react";

function FormHandling() {
  const [name, setName] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [password, setPassword] = useState();
  const [pErrMsg, setPerrMsg] = useState();

  function handleName(e) {
    const { value } = e.target;
    setName(value);
    if (value.length <= 5) {
      setErrorMsg("name length must be more that 5 characters!");
    } else {
      setErrorMsg();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errorMsg) {
      alert("Unable to Submit: Form Contains Errors");
    } else {
      alert(name);
    }
  }

  function handlePassword(e) {
    const { value } = e.target;
    setPassword(value);
    if (value.length <= 6) {
      setPerrMsg("Your password should not be less than 6 Characters....!");
    } else {
      setPerrMsg();
    }
  }
  return (
    <>
      <h1> User Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <p>{errorMsg}</p>
        <br />
        <label>Enter Your Password:</label>
        <input type="password" value={password} onChange={handlePassword} />
        <p>{pErrMsg}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormHandling;
