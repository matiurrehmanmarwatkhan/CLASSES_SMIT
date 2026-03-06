import React, { useState } from "react";

const Form = () => {
  let initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialFormData);

  let handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  let handleChange = () => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: name });
    let { username, email, password } = formData;

    if (name === "username") {
      if (value.length === 0) {
        setErrorData({ ...errorData, username: "User name is required" });
      } else if (value.length < 5) {
        setErrorData({ ...errorData, username: "At least 5 character" });
      } else {
        setErrorData({ ...errorData, username: "" });
      }
    }
  };

  return (
    <div className="h-sceen w-full flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="border rounded-2xl shadow-2xl w-[45%] py-5 mt-5 px-7 flex flex-col gap-5"
      >
        <h1 className="text-3xl text-center font-semibold mb-5">Login Form</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            UserName:
          </label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="UserName"
            name="username"
            value={formData.username}
            className=" focus:outline-none border p-2 rounded-lg"
          />
          <p className="text-red-500">
            {formData.username && formData.username}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            onChange={handleChange}
            placeholder="test@gmail.com"
            name="email"
            value={formData.email}
            className=" focus:outline-none border p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Password:
          </label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="xxxxxx"
            name="password"
            value={formData.password}
            className=" focus:outline-none border p-2 rounded-lg"
          />
        </div>
        <button className="border p-2 rounded-lg shadow hover:shadow-2xl my-5 cursor-pointer">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
