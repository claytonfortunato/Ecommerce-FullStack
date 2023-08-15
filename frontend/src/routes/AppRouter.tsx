import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Page/Home";
import { Header } from "../components/Header";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
