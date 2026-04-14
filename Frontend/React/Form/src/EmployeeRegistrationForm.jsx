import React, { useState } from "react";

const EmployeeRegistrationForm = () => {
  const [hobbies, setHobbies] = useState([]);

  let handleFile = (event) => {
    console.log(event.target.files[0]);
  };

  let handleCheckBox = (e) => {
    const { value, checked } = e.target;

    const flterHobbies = hobbies.filter((hobby) => {
      return hobby !== value;
    });

    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies([...flterHobbies]);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="border w-[40%] flex flex-col mt-10 gap-3 p-5 rounded">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="border p-2 rounded "
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cnic">CNIC</label>
          <input
            className="border p-2 rounded "
            type="text"
            name="cnic"
            id="cnic"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="destination">Destination</label>
          <input
            className="border p-2 rounded "
            type="text"
            name="destination"
            id="destination"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <div className="flex gap-2">
            <input type="radio" name="gender" id="" /> Male
            <input type="radio" name="gender" id="" /> Female
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="hobbies">Hobbies</label>
          <div className="flex gap-2">
            <input
              className="border rounded p-2"
              type="checkbox"
              name="hobbies"
              value={Gaming}
              onChange={handleCheckBox}
              id=""
            />{" "}
            Gaming
            <input
              className="border rounded p-2"
              type="checkbox"
              name="hobbies"
              id=""
              value={Football}
              onChange={handleCheckBox}
            />{" "}
            Football
            <input
              className="border rounded p-2"
              type="checkbox"
              name="hobbies"
              id=""
              value={Cricket}
              onChange={handleCheckBox}
            />{" "}
            Cricket
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Department</label>
          <div className="">
            <select className="border p-2 rounded" name="" id="">
              <option value="">HR</option>
              <option value="">Employee</option>
              <option value="">Manger</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Upload Resume</label>
          <input
            type="file"
            name=""
            id=""
            onChange={handleFile}
            className="border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="border hover:bg-green-500 hover:text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default EmployeeRegistrationForm;
