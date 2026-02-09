import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-circle">A</div>
        <span className="logo-text">Aman</span>
      </div>

 <div className="menu">
  <div className="menu-item active" onClick={() => window.location.href = "/home"}>
    🏠 Home
  </div>
  <div className="menu-item" onClick={() => window.location.href = "/search"}>
    🔍 Search
  </div>
  <div className="menu-item" onClick={() => window.location.href = "/favourite"}>
    ❤️ Favourite
  </div>
</div>



      <div className="profile">
       <div
  className="profile-box"
  onClick={() => window.location.href = "/profile"}
>
  <div className="profile-icon">👤</div>
  <span>Aman</span>
</div>

      </div>
    </div>
  );
}
