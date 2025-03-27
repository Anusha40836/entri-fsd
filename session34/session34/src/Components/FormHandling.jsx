import React, { useState } from "react";

function FormHandling() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameErr, setNameErr] = useState();
  const [emailErr, setEmailErr] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (nameErr) {
      alert("Oh No😟 You cannot submit: Form contains errors");
    } else {
      alert(name);
    }
  }

  function handleName(e) {
    const { value } = e.target;
    setName(value);

    if (value.length <= 6) {
      setNameErr("Your name shoud be alteast 6 characters long");
    } else {
      setNameErr();
    }
  }

  function handleEmail(e) {
    const { value } = e.target;
    setEmail(value);

    if (value.length <= 5) {
      setEmailErr("email length should be more that 5 characters");
    } else {
      setEmailErr();
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form Handling</h1>
        <h2>User Form:</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <p>{nameErr}</p>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} />
        <p>{emailErr}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormHandling;
