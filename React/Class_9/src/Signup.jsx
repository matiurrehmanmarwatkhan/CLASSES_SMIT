import React, { useState } from "react";

const Signup = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const Validate = (data) => {
    let error = {};

    if (!data.username) {
      error.username = "Username is required";
    } else if (data.username.length < 5) {
      error.username = "Username must be at least 5 character";
    }

    if (!data.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Invalid email format";
    }

    if (!data.password) {
      error.password = "Password is required";
    } else if (data.password.length < 6) {
      error.password = "Password must be at least 6 character";
    }
    return error;
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialFormData);

  const handleSignUp = (e) => {
    e.preventDefault();

    const errors = Validate(formData);
    setErrorData(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted", formData);
      setFormData(initialFormData);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const UpdateForm = { ...formData, [name]: value };

    setFormData(UpdateForm);

    const errors = Validate(UpdateForm);
    setErrorData(errors);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="border rounded-2xl shadow-2xl w-[25%] py-5 mt-5 px-7 flex flex-col gap-5"
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
          {errorData.username && (
            <p className="text-red-500">{errorData.username}</p>
          )}
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
          {errorData.email && <p className="text-red-500">{errorData.email}</p>}
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
          {errorData.password && (
            <p className="text-red-500">{errorData.password}</p>
          )}
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

export default Signup;
