import { Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
function RequireAuth ({ children }) {
    const { authed } = useAuth(); 
    const logined = window.localStorage.getItem('token')
    if(authed || logined){
      return children;
    }
    else return <Navigate to="/login" replace />
  }

export default RequireAuth