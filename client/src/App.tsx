import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyAccountPage from "./pages/MyAccountPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import VerifyOTPPage from "./pages/VerifyOTPPage";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminLayout from "./pages/admin/AdminLayout";
import ProductsPage from "./pages/admin/ProductsPage";
import UserOrdersPage from "./pages/admin/UserOrdersPage";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";

import UsersPage from "./pages/admin/UsersPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/myaccount" element={<MyAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/verifyotp" element={<VerifyOTPPage />} /> */}
            <Route path="/verifyotp/:email" element={<VerifyOTPPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Not Found Page for all other routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="userorders" element={<UserOrdersPage />} />
            <Route path="users" element={<UsersPage />} />
            {/* Not Found Page for all other admin routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
