import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import MapView from "../mapView/MapView";
import "./usercard.css";
import CardContiner from "../cardContainer/CardContiner";

function UserCard() {
  const [filterUser, setFilterUser] = useState([]);
  const id = useSelector((state) => state.user.id);
  const user = useSelector((state) => state.user.user);

  const userF = useMemo(
    () => user.filter((userData) => userData.id === id),
    [id, user],
  );

  useEffect(() => {
    if (id) {
      setFilterUser(userF);
    }
  }, [id, user]);

  return (
    <section
      className={
        filterUser.length ? "userCardContainer" : "userCardContainer--empty"
      }
    >
      {filterUser.length ? (
        <>
          <h1>DATOS GENERALES</h1>
          <CardContiner title="Datos personales">
            <p> {filterUser[0].name}</p>
            <p> {filterUser[0].email}</p>
            <p> {filterUser[0].phone}</p>
          </CardContiner>

          <CardContiner title="Datos compania">
            <p> {filterUser[0].company.name}</p>
            <p> {filterUser[0].company.catchPhrase}</p>
            <p>{filterUser[0].company.bs}</p>
          </CardContiner>
          <CardContiner title="Direccion">
            <p> {filterUser[0].address.city}</p>
            <p> {filterUser[0].address.street}</p>
            <p> {filterUser[0].address.suite}</p>
            <p> {filterUser[0].address.zipcode}</p>
          </CardContiner>

          <CardContiner title="UBICACION">
            <MapView
              lat={filterUser[0].address.geo.lat}
              lng={filterUser[0].address.geo.lng}
              address={filterUser[0].address.street}
            />
          </CardContiner>
        </>
      ) : (
        <p>Elige cliente porfavor</p>
      )}
    </section>
  );
}

export default UserCard;
