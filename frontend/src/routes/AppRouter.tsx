import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Page/Home";
import {PageSneakers} from '../Page/PageSneakers'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PageSneakers/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
