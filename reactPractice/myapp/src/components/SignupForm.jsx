import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required..");
      return;
    }
    setSubmitted(true);

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h1>Signup Form</h1>
      {submitted ? <h2>You have successfuly registered...</h2> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter name.."
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter email.."
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter password.."
          onChange={handleChange}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
