import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './@core/hooks/useAuth';
import ProtectedRoute from './@core/components/protectedRoute';
import Home from './pages/home'
import Login from './pages/login'
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
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
