import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Changepassword from './pages/Changepassword';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Resetpassword' element={<Resetpassword />}/>
      <Route path='/Changepassword' element={<Changepassword />}/>
      <Route path='/Forgotpassword' element={<Forgotpassword />}/>
      <Route path='/admin' element={<MainLayout />}>
        <Route index element={<Dashboard />}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
