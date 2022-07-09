import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Table from "./Table";

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "leanne@hotmail.com ",
    address: {
      city: "Bogota",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "ervin@hotmail.com",
    address: {
      city: "Bogota",
    },
  },
];

const handleOnClick = (id) => {
  console.log(id);
};

test("renders Table Component", () => {
  const component = render(
    <Table filterUSer={users} handleOnClick={handleOnClick} loading={false} />,
  );
  component.getByText("Leanne Graham");
  component.getByText("Ervin Howell");
});

test("renders click table", () => {
  const component = render(
    <Table filterUSer={users} handleOnClick={handleOnClick} loading={false} />,
  );
  fireEvent.click(component.getByText("Leanne Graham"));
});
