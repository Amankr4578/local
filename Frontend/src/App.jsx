import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/songs/Home";
import Search from "./components/songs/Search";
import Favourite from "./components/songs/Favourite";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
<Route path="/favourite" element={<Favourite />} />
<Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
