import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-circle">A</div>
        <span className="logo-text">Aman</span>
      </div>

      <div className="menu">
        <div className="menu-item active">Home</div>
        <div className="menu-item">Search</div>
        <div className="menu-item">Favourite</div>
      </div>

      <div className="profile">
        <div className="profile-box">
          <div className="profile-icon">👤</div>
          <span>Aman</span>
        </div>
      </div>
    </div>
  );
}
