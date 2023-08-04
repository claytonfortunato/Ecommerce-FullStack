import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Page/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
