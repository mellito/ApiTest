import React from "react";
import { useSelector } from "react-redux";
import Table from "../../components/table/Table";
import UserCard from "../../components/userCard/UserCard";
import { filterUsers } from "../../selector/user";
import "./home.css";

function Home() {
  const filter = useSelector(filterUsers);
  return (
    <main>
      <Table filterUSer={filter} />
      <UserCard />
    </main>
  );
}

export default Home;
