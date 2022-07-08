import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getUsers from "./services/users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div className="App" />;
}

export default App;
