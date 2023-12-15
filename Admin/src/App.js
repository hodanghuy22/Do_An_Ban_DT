import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Changepassword from './pages/Changepassword';
import Comment from './pages/Comment';
import Orders from './pages/Orders';
import CouponList from './pages/CouponList';
import CustomerList from './pages/CustomerList';
import ProductList from './pages/ProductList';
import ProductTypeList from './pages/ProductTypeList';
import ColorList from './pages/ColorList';
import BrandList from './pages/BrandList';
import AddProduct from './pages/AddProduct';
import AddProductType from './pages/AddProductType';


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
        <Route path='orders' element={<Orders />}/>
        <Route path='coupon-list' element={<CouponList />}/>
        <Route path='customer-list' element={<CustomerList />}/>
        <Route path='product-list' element={<ProductList />}/>
        <Route path='add-product' element={<AddProduct />}/>
        <Route path='product-type-list' element={<ProductTypeList />}/>
        <Route path='add-product-type' element={<AddProductType />}/>
        <Route path='color-list' element={<ColorList />}/>
        <Route path='brand-list' element={<BrandList />}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
