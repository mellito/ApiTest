import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import MapView from "../mapView/MapView";
import "./usercard.css";

function UserCard() {
  const [filterUser, setFilterUser] = useState([]);
  const id = useSelector((state) => state.user.id);
  const user = useSelector((state) => state.user.user);

  const userF = useMemo(
    () => user.filter((userData) => userData.id === id),
    [id, user],
  );
  console.log(userF);
  useEffect(() => {
    if (id) {
      setFilterUser(userF);
    }
  }, [id, user]);

  return (
    <section className="userCardContainer">
      {!!filterUser.length && (
        <>
          <h1>DATOS GENERALES</h1>
          <p>Nombre: {filterUser[0].name}</p>
          <p>Correo: {filterUser[0].email}</p>
          <p>ciudad{filterUser[0].address.city}</p>
          <p>Phone {filterUser[0].phone}</p>
          <MapView
            lat={filterUser[0].address.geo.lat}
            lng={filterUser[0].address.geo.lng}
            address={filterUser[0].address.street}
          />
        </>
      )}
    </section>
  );
}

export default UserCard;
