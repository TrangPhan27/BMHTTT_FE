import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Nav() {
    const { authed, logout } = useAuth();
  
    const handleLogout = () => {
      logout();
    };
  
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addApplication">Pricing</Link>
          </li>
        </ul>
        {authed && <button onClick={handleLogout}>Logout</button>}
      </nav>
    );
  }

export default Nav