import Sidebar from "../layout/Sidebar";
import "./profile.css";

export default function Profile() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <h2 className="section-title">Profile</h2>

        <div className="profile-card">
          <div className="profile-avatar">A</div>
          <h3>Aman</h3>
          <p>aman@email.com</p>

          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
