import Image from 'next/image';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div id="profileSection">
      <Image src={user.photoURL} alt="userURL" width="200px" height="200px" />
      <h2>{user.displayName}</h2>
      <h5>{user.email}</h5>
      <h5>Last Login: {user.metadata.lastSignInTime}</h5>
      <Button type="button" class="btn btn-danger" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
