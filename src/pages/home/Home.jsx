import React from "react";
import Table from "../../components/table/Table";
import UserCard from "../../components/userCard/UserCard";
import "./home.css";

function Home() {
  return (
    <main>
      <Table />
      <UserCard />
    </main>
  );
}

export default Home;
