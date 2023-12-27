import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Changepassword from './pages/Changepassword';
import Comment from './pages/Comment';
import Invoice from './pages/Invoice';
import CouponList from './pages/CouponList';
import CustomerList from './pages/CustomerList';
import ProductList from './pages/ProductList';
import ProductTypeList from './pages/ProductTypeList';
import ColorList from './pages/ColorList';
import BrandList from './pages/BrandList';
import AddProductType from './pages/AddProductType';
import AddCustomer from './pages/AddCustomer';
import AddCoupon from './pages/AddCoupon';
import AddColor from './pages/AddColor';
import AddBrand from './pages/AddBrand';
import ProductDetail from './pages/ProductDetail';
import AddPhone from './pages/AddPhone';
import PhoneList from './pages/PhoneList';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/resetpassword' element={<Resetpassword />}/>
      <Route path='/changepassword' element={<Changepassword />}/>
      <Route path='/forgotpassword' element={<Forgotpassword />}/>
      <Route path='/admin' element={<MainLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path='comment' element={<Comment />}/>
        <Route path='invoice' element={<Invoice />}/>
        <Route path='coupon-list' element={<CouponList />}/>
        <Route path='customer-list' element={<CustomerList />}/>
        <Route path='add-product' element={<AddProduct />}/>
        <Route path='product-list' element={<ProductList />}/>
        <Route path='add-phone' element={<AddPhone />}/>
        <Route path='add-phone/:id' element={<AddPhone />}/>
        <Route path='phone-list' element={<PhoneList />}/>
        <Route path='product-type-list' element={<ProductTypeList />}/>
        <Route path='add-product-type' element={<AddProductType />}/>
        <Route path='add-product-type/:id' element={<AddProductType />}/>
        <Route path='color-list' element={<ColorList />}/>
        <Route path='brand-list' element={<BrandList />}/>
        <Route path='add-customer' element={<AddCustomer />}/>
        <Route path='add-coupon' element={<AddCoupon />}/>
        <Route path='add-coupon/:id' element={<AddCoupon />}/>
        <Route path='add-color' element={<AddColor />}/>
        <Route path='add-color/:id' element={<AddColor />}/>
        <Route path='add-brand' element={<AddBrand />} />
        <Route path='add-brand/:id' element={<AddBrand />} />
        <Route path='product-detail/:phoneId' element={<ProductDetail />} />

      </Route>
      </Routes>
    </Router>
  );
}

export default App;
