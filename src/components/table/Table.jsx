import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { getId } from "../../feature/user/userSlice";
import "./table.css";

import Search from "../search/Search";

function Table({ filterUSer }) {
  const dispatch = useDispatch();
  const [tableTitle] = useState(["NOMBRE", "CORREO", "CIUDAD"]);
  const loading = useSelector((state) => state.user.isLoading);
  const handleIdUser = (id) => {
    dispatch(getId(id));
  };

  return (
    <section className="tableData">
      {loading ? (
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
              {filterUSer.map((userData) => (
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

Table.propTypes = {
  filterUSer: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
      }),
    }),
  ).isRequired,
};
export default Table;
