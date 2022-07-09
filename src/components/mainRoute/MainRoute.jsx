import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";

function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
