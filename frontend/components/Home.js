import React from 'react';
import { useAuth } from '../hooks';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  const {checkAuth, auth} = useAuth(() => navigate('/login'))

  if (!auth) {
    return (<div>Please wait...</div>)
  }
  
  return (
    <div className="screen">
      <h3>Home Page</h3>
      <button onClick={checkAuth}>
        Interact with site...
      </button>
    </div>
  )
}
