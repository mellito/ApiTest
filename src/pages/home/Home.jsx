import { BarLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../components/search/Search";
import Table from "../../components/table/Table";
import UserCard from "../../components/userCard/UserCard";
import { filterUsers } from "../../selector/user";
import "./home.css";
import { getId } from "../../feature/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const filter = useSelector(filterUsers);
  const loading = useSelector((state) => state.user.isLoading);
  const handleIdUser = (id) => {
    dispatch(getId(id));
  };

  return (
    <main>
      <section className="tableData">
        {loading ? (
          <section className="tableLoading">
            <BarLoader color="white" />
          </section>
        ) : (
          <>
            <h1>USUARIOS</h1>
            <Search />
            <Table
              filterUSer={filter}
              handleOnClick={handleIdUser}
              loading={loading}
            />
          </>
        )}
      </section>

      <UserCard />
    </main>
  );
}

export default Home;
