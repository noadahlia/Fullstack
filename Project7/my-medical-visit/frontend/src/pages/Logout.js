import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const { logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout(); // Déclencher la déconnexion après 3 secondes
      navigate('/login');
    }, 1000);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté avant la fin du délai
  }, [logout, navigate]);

  return (
    <div className="content" style={styles.container}>
      <p style={styles.logoutText}>Logout...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  logoutText: {
    fontSize: '2em', // Taille de police plus grande, ajustez selon vos besoins.
  },
};

export default Logout;
