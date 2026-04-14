import React, { useState } from "react";

const RegisterProMax = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: " ",
    password: "",
    dob: "",
  });

  let handleSignUp = (e) => {
    e.preventDefault();
  };

  let handleChange = (e) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

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
            className=" focus:outline-none border p-2 rounded-lg"
          />
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
            className=" focus:outline-none border p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Date Of Birth:
          </label>
          <input
            type="date"
            onChange={handleChange}
            name="dob"
            // placeholder="test@gmail.com"
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

export default RegisterProMax;
