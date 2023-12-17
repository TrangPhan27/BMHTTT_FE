import { Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
function RequireAuth ({ children }) {
    const { authed } = useAuth(); 
    const logined = window.localStorage.getItem('token')
    if(authed || logined){
      console.log(456)
      return children;
    }
    else return <Navigate to="/login" replace />
    // return authed? children : <Navigate to="/login" replace />;
    // return children;
  }

export default RequireAuth