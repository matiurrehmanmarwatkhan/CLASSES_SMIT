import React, { useState } from "react";

const FormPro = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialFormData);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

    // Username validation
    if (name === "username") {
      if (value.length === 0) {
        setErrorData({ ...errorData, username: "Username is required" });
      } else if (value.length < 5) {
        setErrorData({ ...errorData, username: "At least 5 characters" });
      } else {
        setErrorData({ ...errorData, username: "" });
      }
    }

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.length === 0) {
        setErrorData({ ...errorData, email: "Email is required" });
      } else if (!emailRegex.test(value)) {
        setErrorData({ ...errorData, email: "Invalid email format" });
      } else {
        setErrorData({ ...errorData, email: "" });
      }
    }

    // Password validation
    if (name === "password") {
      if (value.length === 0) {
        setErrorData({ ...errorData, password: "Password is required" });
      } else if (value.length < 6) {
        setErrorData({ ...errorData, password: "At least 6 characters" });
      } else {
        setErrorData({ ...errorData, password: "" });
      }
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 mt-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-semibold mb-5">
          Sign Up Form
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-semibold">
            Username:
          </label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Username"
            name="username"
            id="username"
            value={formData.username}
            className="focus:outline-none border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errorData.username}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            onChange={handleChange}
            placeholder="test@gmail.com"
            name="email"
            id="email"
            value={formData.email}
            className="focus:outline-none border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errorData.email}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="xxxxxx"
            name="password"
            id="password"
            value={formData.password}
            className="focus:outline-none border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errorData.password}</p>
        </div>

        <button
          type="submit"
          className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormPro;
