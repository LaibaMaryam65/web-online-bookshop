import "./App.css"
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FeaturedPage from "./pages/FeaturedPage";
import LatestPage from "./pages/LatestPage";
import SalePage from "./pages/SalePage";
import GenrePage from "./pages/GenrePage.jsx";
import AdminPanel from "./components/Admin_Panel/AdminPanel.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import CartPage from "./pages/CartPage.jsx";
import AdminFeatured from "./components/Admin_Panel/AdminFeatured.jsx";
import AdminLatest from "./components/Admin_Panel/AdminLatest.jsx";
import AdminSale from "./components/Admin_Panel/AdminSale.jsx";
import BestSellerPage from "./pages/BestSellerPage.jsx";
import AdminBest from "./components/Admin_Panel/AdminBest.jsx";
import AdminLogin from "./components/Admin_Panel/AdminLogin.jsx";
import CheckoutForm from "./pages/CheckoutForm.jsx";
import AdminOrders from "./components/Admin_Panel/AdminOrders.jsx";
function App() {
const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("admin") === "true"
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedPage />} />
            <Route path="/latest" element={<LatestPage />} />
             <Route path="/sale" element={<SalePage />} />
              <Route path="/genre" element={<GenrePage />} />
                <Route path="/bestseller" element={<BestSellerPage/>} />
               <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/admin" element={<AdminPanel/>}/>
              <Route path="/cart" element={<CartPage />} />
  <Route path="/checkout" element={<CheckoutForm/>} />
              <Route path="/login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

              {isAdmin && (
          <>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/featured" element={<AdminFeatured />} />
            <Route path="/admin/latest" element={<AdminLatest />} />
            <Route path="/admin/sale" element={<AdminSale />} />
            <Route path="/admin/bestseller" element={<AdminBest />} />
             <Route path="/admin/orders" element={<AdminOrders/>} />
          </>
        )}
        </Routes>
        
      </div>
    </BrowserRouter>
  )

}

export default App
