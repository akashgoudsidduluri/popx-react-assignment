import { Navigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <MobileContainer>
      <div className="profile-title" ><h2>Account Settings</h2></div>

      <div className="profile-section">
        <div className="profile-header">
          <img
            className="avatar"
            src="https://i.pravatar.cc/150"
            alt="profile"
          />

          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          sed diam nonumy eirmod tempor
          invidunt ut labore et dolore
          magna aliquyam erat.
        </p>
      </div>
    </MobileContainer>
  );
}

export default Profile;