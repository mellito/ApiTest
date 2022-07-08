import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Home;
