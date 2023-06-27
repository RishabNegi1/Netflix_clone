import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import ProtectedROute from "./Component/ProtectedROute";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/account" element={<ProtectedROute><Account/></ProtectedROute>} />
      </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
