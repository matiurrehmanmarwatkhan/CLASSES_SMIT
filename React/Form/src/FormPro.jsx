import React, { useState } from "react";

const FormPro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSignUp = (e) => {
    e.preventDefault();

    console.log("Email :", email);
    console.log("Password :", password);
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
            Email:
          </label>
          <input
            type="email"
            onChange={handleEmail}
            placeholder="test@gmail.com"
            className=" focus:outline-none border p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Password:
          </label>
          <input
            onChange={handlePassword}
            type="password"
            placeholder="xxxxxx"
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

export default FormPro;
