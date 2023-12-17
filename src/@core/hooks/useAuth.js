import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "./useApi";
import { useEffect } from "react";
const authContext = createContext();

export function useAuth() {
  const [authed, setAuthed] = useState(false)
  const navigate = useNavigate();
  
  const login = (form, errorCallback) => {
    client.post('/login', form)
    .then(async res => {
        if(res && res.status === 200){
          window.localStorage.setItem('token', 'true')
          setAuthed(true)
        }
    })
    .then(() => {
        navigate("/")
    })
    .catch(err => {
        if(errorCallback) errorCallback(err)
    })
    // window.localStorage.setItem('token', 'true')
    //       setAuthed(true)
    //       navigate("/")
  }

  const logout = async () => {
    const res = await client.get('/logout')
    if(res.status === 200){
      setAuthed(false)
      window.localStorage.removeItem('token')
      navigate("/login")
    }else {
      alert("Couldn't log out", res.message)
    }
    // setAuthed(false)
    //   window.localStorage.removeItem('token')
    //   navigate("/login")
  }
  return {
    authed,
    login,
    logout,
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}