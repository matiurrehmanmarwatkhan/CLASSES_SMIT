import { useState } from "react";

const User = () => {
  //   const [User, setUser] = useState(["Waqas", "Awais", "Irshad", "Noman"]);
  const { userDetail, setUserDetail } = useState({
    id: 1,
    name: "Mati UR Rehman",
    grade: "A",
    // age : 18,
  });

  //   let handleAddUser = () => {
  //     setUser([...User, "Mati Ur Rehman", "Muhammad Noman"]);
  //   };

  let handleUpdateUSerDetail = () => {
    setUserDetail({ ...userDetail, age: 20, name: "rizwan" });
  };
  console.log(userDetail);

  //   console.log(User)
  return (
    // <div>
    //   <h1>User Component</h1>
    //   <p>Array Length : {User.length}</p>
    //   <button
    //     className="p-2 rounded-2xl border bg-black"
    //     onClick={handleAddUser}
    //   >
    //     Add New User
    //   </button>
    // </div>
    <div>
      <div className="border rounded-2xl p-5">
        <h2 className="font-extra-bold  ">User Detail</h2>
        <p>Id : {userDetail?.id}</p>
        <p>Name: {userDetail?.name} </p>
        <p>Grade : {userDetail?.grade} </p>
        <p>Age : {userDetail?.age} </p>
      </div>
      <button
        onClick={handleUpdateUSerDetail}
        className="runded border bg-white"
      >
        Add User Detail
      </button>
    </div>
  );
};

export default User;
