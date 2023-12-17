import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Nav from "./@core/components/nav";
import RequireAuth from "./@core/components/requireAuth";
import { AuthProvider } from "./@core/hooks/useAuth";
import AddApplication from "./pages/addApplication";
import File from './pages/File'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ListUsers from "./pages/listUsers";


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
          <Route
            path="listApplication"
            element={
              <RequireAuth>
              <header>
              <Nav/>
              </header>
                <File />
              </RequireAuth>
            }
          />
          <Route
            path="listUsers"
            element={
              <RequireAuth>
              <header>
              <Nav/>
              </header>
                <ListUsers />
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
