import "./App.css";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Customer from "./pages/addApplication";
import Nav from "./@core/components/nav";
import RequireAuth from "./@core/components/requireAuth";
import { AuthProvider } from "./@core/hooks/useAuth";
import AddApplication from "./pages/addApplication";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
          
          <Route
            path="/"
            element={
              <RequireAuth>
              <header>
              <Nav/>
              </header>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="addApplication"
            element={
              <RequireAuth>
              <header>
              <Nav/>
              </header>
                <AddApplication />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
    </AuthProvider>
    </BrowserRouter>
        
  );
}

export default App;
