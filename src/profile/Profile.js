import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { isAuthenticated, user } = useAuth0();

  // Render the Profile component only when the user is authenticated
  return (
    isAuthenticated && (
      <div>
        <h2>Profile</h2>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information here as needed */}
        </div>
      </div>
    )
  );
};

export default Profile;
