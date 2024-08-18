import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
// import Banner from './component/banner/Banner';
import Index from './component/index/Index';
import Footer from './component/footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './component/products/Products';
import ProductUrl from './component/product/ProductUrl';
import Checkout from './component/checkout/Checkout';
import Cart from './component/cart/Cart';
import SuccessPage from './component/success/SuccessPage';
import FailedPage from './component/success/Failed';
import Contact from './component/contact/Contact';
import NotFound from './component/NotFound';
import Category from './component/category/Category';
import { useEffect } from 'react';
import Toast from './component/toast/Toast';
import DropDown from './component/DropDown';
import Login from "./component/signup-login/Login"
import PrivacyPolicy from './component/privacypolicy/PrivacyPolicy';
import Profile from "./component/profile/Profile"
import { connect } from 'react-redux';
import ShippingPolicy from './component/ShippingPolicy/ShippingPolicy';
import RefundPolicy from './component/refundpolicy/RefundPolicy';
import TermsAndConditions from './component/Termsconditions/TermsAndConditions';
import QRCode from './component/QR/QRCode';
import About from './component/about/About';
import Search from './component/search/Search';
function App({
  user_data
}) {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
    console.log(AOS.init())
  }, [])
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <DropDown/>
        <div className=' overflow-x-hidden relative '>
          <Routes>
            <Route exact path={'/'} element={<Index />} />
            {/* <Route exact path={'/about'} element={<About/>} /> */}
            <Route exact path={'/products/:category'} element={<Products />} />
            {/* <Route exact path={'/search/:query'} element={<Search/>} /> */}
            {/* <Route exact path={'/products/:category/:order'} element={<Products />} /> */}
            <Route exact path={'/product/:id'} element={<ProductUrl />} />
            {/* {user_data?<Route exact path={'/checkout'} element={<Checkout />} />:<Route exact path={'/checkout'} element={<Profile />} />} */}
            <Route exact path={'/cart'} element={<Cart />} />
            {/* <Route exact path={'/success'} element={<SuccessPage />} /> */}
            {/* <Route exact path={'/failed'} element={<FailedPage />} /> */}
            {/* <Route exact path={'/contact'} element={<Contact />} /> */}
            {/* <Route exact path={'/category'} element={<Category />} /> */}
            {/* <Route exact path={'/profile'} element={<Profile />} /> */}
            {/* <Route exact path={'/signin'} element={<Profile />} /> */}
            {/* <Route exact path={'/privacypolicy'} element={<PrivacyPolicy />} /> */}
            {/* <Route exact path={'/shippingpolicy'} element={<ShippingPolicy />} /> */}
            {/* <Route exact path={'/refundpolicy'} element={<RefundPolicy/>} /> */}
            {/* <Route exact path={'/termsandconditions'} element={<TermsAndConditions/>} /> */}
            {/* <Route exact path={'/qrcode'} element={<QRCode/>} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
        {/* </Router> */}
      </BrowserRouter>
      <Toast /> 
    </div>
  );
}
const mapStateToProps = (state)=>{
  const {
    user_data
  }=state.variables
  return {
    user_data
  }
}

const mapActionsToProps = {

}
export default connect(mapStateToProps,mapActionsToProps)(App);
