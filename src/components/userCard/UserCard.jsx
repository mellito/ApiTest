import { useSelector } from "react-redux";
import MapView from "../mapView/MapView";
import "./usercard.css";
import CardContiner from "../cardContainer/CardContiner";
import { filterUsersById } from "../../selector/user";

function UserCard() {
  const filter = useSelector(filterUsersById);
  return (
    <section
      className={
        filter.length ? "userCardContainer" : "userCardContainer--empty"
      }
    >
      {filter.length ? (
        <>
          <h1>DATOS GENERALES</h1>
          <CardContiner title="Datos personales">
            <p> {filter[0].name}</p>
            <p> {filter[0].email}</p>
            <p> {filter[0].phone}</p>
          </CardContiner>

          <CardContiner title="Datos compania">
            <p> {filter[0].company.name}</p>
            <p> {filter[0].company.catchPhrase}</p>
            <p>{filter[0].company.bs}</p>
          </CardContiner>
          <CardContiner title="Direccion">
            <p> {filter[0].address.city}</p>
            <p> {filter[0].address.street}</p>
            <p> {filter[0].address.suite}</p>
            <p> {filter[0].address.zipcode}</p>
          </CardContiner>

          <CardContiner title="UBICACION">
            <MapView
              lat={filter[0].address.geo.lat}
              lng={filter[0].address.geo.lng}
              address={filter[0].address.street}
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
