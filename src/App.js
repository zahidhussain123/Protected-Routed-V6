import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(null)
   useEffect(()=>{
   const user = localStorage.getItem("auth")
   user && JSON.parse(user) ? setAuth(true) : setAuth(false)
   },[])

   useEffect(()=>{

     localStorage.setItem("auth",auth)
   } ,[auth])
  return (
    <Routes>
    <Route path="/" element={<Dashboard setAuth={setAuth} />} />
    <Route element={<PrivateRoute auth={auth} />}   >
    <Route path="/profile" element={<Profile setAuth={setAuth}   />} />
    </Route>
    </Routes>
  );
}

export default App;
