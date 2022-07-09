import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import { getId } from "../../feature/user/userSlice";
import "./table.css";
import Search from "../search/Search";

function Table() {
  const [filterUser, setFilterUser] = useState([]);
  const dispatch = useDispatch();
  const [tableTitle] = useState(["NOMBRE", "CORREO", "CIUDAD"]);
  const user = useSelector((state) => state.user);
  const handleIdUser = (id) => {
    dispatch(getId(id));
  };

  useEffect(() => {
    if (user.searchValue) {
      setFilterUser(
        user.user.filter(
          (userData) =>
            userData.name
              .toLowerCase()
              .includes(user.searchValue.toLowerCase()) ||
            userData.email
              .toLowerCase()
              .includes(user.searchValue.toLowerCase()) ||
            userData.address.city
              .toLowerCase()
              .includes(user.searchValue.toLowerCase()),
        ),
      );
    } else {
      setFilterUser(user.user);
    }
  }, [user.searchValue, user.user]);

  return (
    <section className="tableData">
      {user.isLoading ? (
        <section className="tableLoading">
          <BarLoader color="white" />
        </section>
      ) : (
        <>
          <h1>USUARIOS</h1>
          <Search />
          <table className="tableContainer">
            <thead>
              <tr>
                {tableTitle.map((title) => (
                  <th key={title}>{title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filterUser.map((userData) => (
                <tr
                  key={userData.id}
                  onClick={() => {
                    handleIdUser(userData.id);
                  }}
                >
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>{userData.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
}

export default Table;
