import './App.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Men from "./pages/Men";
import Women from './pages/Women';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProfileInformation from './pages/ProfileInformation';
import ProfileChangePassword from './pages/ProfileChangePassword';
import Cart from './pages/Cart';
import CartMoreInfo from './pages/CartMoreInfo'
import LinkSuccess from './pages/LinkSuccess';
import LinkSuccessOne from './pages/LinkSuccessOne';
import ProfileFavList from './pages/ProfileFavList'
import CheckoutEmpty from './pages/CheckoutEmpty';
import BlogInfo from './pages/BlogInfo';
import CheckoutSideForm1 from './pages/CheckoutForm1';
import CheckoutSideForm2 from './pages/CheckoutForm2';
import HomePage from './pages/HomePage';
import ProfileOrderListInfo from './pages/ProfileOrderListInfo'
import ProfileOrderList from './pages/ProfileOrderList'
import CheckoutSuccess from './pages/CheckoutSuccess'
import MensCollection from './pages/Men\'sCollection';
import WomensCollection from './pages/Women\'sCollection';
import ShoeInfo from './pages/ShoeInfo';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/men"
            element={<Men />} />

          <Route path="/women"
            element={<Women />} />

          <Route path="/signup"
            element={<SignUp />} />

          <Route path="/signin"
            element={<SignIn />} />

          <Route path="/forgot_password"
            element={<ForgotPassword />} />

          <Route path="/reset_password"
            element={<ResetPassword />} />

          <Route path="/profile_infomation"
            element={<ProfileInformation />} />

          <Route path="/profile_change_password"
            element={<ProfileChangePassword />} />

          <Route path="/privacy_policy"
            element={<PrivacyPolicy />} />

          <Route path="/cart"
            element={<Cart />} />

          <Route path="/cart_more_info"
            element={<CartMoreInfo />} />

          <Route path="/link_success"
            element={<LinkSuccess />} />

          <Route path="/link_success_one"
            element={<LinkSuccessOne />} />

          <Route path="/contact"
            element={<Contact />} />

          <Route path="/profile_fav_ist"
            element={<ProfileFavList />} />

          <Route path="/profile_order_list"
            element={<ProfileOrderList />}
          />
          <Route path="/profile_order_list_info"
            element={<ProfileOrderListInfo />} />

          <Route path="/checkout_empty"
            element={<CheckoutEmpty />} />

          <Route path="/blog_info"
            element={<BlogInfo />} />

          <Route path="/checkout_side_form1"
            element={<CheckoutSideForm1 />} />

          <Route path="/checkout_side_form2"
            element={<CheckoutSideForm2 />} />

          <Route path="/checkout_success"
            element={<CheckoutSuccess />} />

          <Route path="/mens_collection"
            element={<MensCollection />} />

          <Route path="/womens_collection"
            element={<WomensCollection />} />

          <Route path="/shoe_info"
            element={<ShoeInfo />} />

          <Route
            path="/blog_page"
            element={<BlogPage />} />

          <Route path='/'
            element={<HomePage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
