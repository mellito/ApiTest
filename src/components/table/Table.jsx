import PropTypes from "prop-types";
import { useState } from "react";

import "./table.css";

function Table({ filterUSer, handleOnClick }) {
  const [tableTitle] = useState(["NOMBRE", "CORREO", "CIUDAD"]);

  return (
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
              handleOnClick(userData.id);
            }}
          >
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>{userData.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
  handleOnClick: PropTypes.func.isRequired,
};
export default Table;
