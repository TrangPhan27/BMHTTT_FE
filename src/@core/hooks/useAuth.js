import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "./useApi";
const authContext = createContext();

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const initAuth = async () => {
        const role = window.localStorage.getItem('role');
        if(role){
            setLoading(true)
            await client.get('me')
            .then(async res => {
                setLoading(false)
                setUser({...res.data.user})
            })
            .catch(err => {
                console.log(err)
                console.log("Couldn't get role")
                localStorage.removeItem('role')
                localStorage.removeItem('userData')
                setUser(null)
                setLoading(false)
            })
        }
        else {
            setLoading(false)
        }
    }
    initAuth()
  }, [])
  const login = (params, errorCallback) => {
    client.post('/login', {...params})
    .then(async res => {
        window.localStorage.setItem('role', res.data.role)
    })
    .then(() => {
        client.get('/me').then(async res => {
            setUser({...res.data.user, role: res.data.user.role})
            window.localStorage.setItem('userData', JSON.stringify(res.data.user))
            navigate("/")
        });
    })
    .catch(err => {
        if(errorCallback) errorCallback(err)
    })
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem('role')
    navigate("/login")
  }
  return {
    user,
    loading,
    login,
    logout,
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{!auth.loading && children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}