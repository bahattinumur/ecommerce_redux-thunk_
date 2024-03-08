import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./component/Header";
import BasketPage from "./pages/BasketPage";
import Footer from './component/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<BasketPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
