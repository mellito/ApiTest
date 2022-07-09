import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getUsers from "./services/users";
import MainRoute from "./components/MainRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <MainRoute />;
}

export default App;
