import { useState } from 'react';
import { useAppState } from '../state/AppState';

const LoginPanel = () => {
  const { auth, login, logout } = useAppState();
  const [email, setEmail] = useState('');

  if (auth.isAuthenticated) {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 14 }}>Signed in as {auth.email}</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button onClick={() => email && login(email)} disabled={!email}>
        Login
      </button>
    </div>
  );
};

export default LoginPanel;