import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './@core/hooks/useAuth';
import ProtectedRoute from './@core/components/protectedRoute';
import Home from './pages/home'
import Login from './pages/login'
import Customer from './pages/customer';
import File from './pages/File'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/File" element={<File />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
