/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => (
  <div className="user-card">
    <h2>{user.name}</h2>
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
    <p><strong>Company:</strong> {user.company.name}</p>
    <p><strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
  </div>
);

export default UserCard;
