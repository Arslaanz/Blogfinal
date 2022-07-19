import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardAction = () => {
  return (
    <div>
      <div class='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-light'>
          <i class='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
        <Link to='/upload' class='btn btn-light'>
          <i class='fas fa-upload text-primary'></i> Upload Blog
        </Link>
        <Link to='Dictonary' class='btn btn-light'>
          <i class='fas fa-pen text-primary'></i> Create Post{' '}
        </Link>
      </div>
    </div>
  );
};

export default DashboardAction;
