import React, { useEffect, useState } from "react";

const Post = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id} className="border p-1">
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default Post;
