import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { searchValue } from "../../feature/user/userSlice";
import "./search.css";

function Search() {
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      dispatch(searchValue(value));
    },
    // delay in ms
    1000,
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => {
          debounced(e.target.value);
        }}
        className="search"
      />
    </div>
  );
}

export default Search;
