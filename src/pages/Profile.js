import React from "react";
import "./Profile.css";
import FotoProfile from "../images/privat.jpg";

const Profile = () => {
  return (
    <div className="profile-admin-container">
      <div className="profile-admin">
        <h2>Profile</h2>
        <div className="profile-details">
          <div className="profile-image">
            <img src={FotoProfile} alt="Profile" />
          </div>
          <div className="FotoProfile.jpg">
            <p>Nama: Kelompok 10</p>
            <p>NIM: 211201211...</p>
            {/* Informasi profil lainnya */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
