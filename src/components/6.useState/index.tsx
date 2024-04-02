import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setIsLoggedin(true);
    setUser({
      name: 'Dhimas',
      email: 'dh@gmail.com',
    });
  };
  const handleLogout = () => {
    setIsLoggedin(false);
    setUser(null);
  };

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '2rem',
      }}
    >
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'Loged in' : 'Logged out'}</div>
      <div>User name is: {user?.name}</div>
      <div>User email is: {user?.email}</div>
    </div>
  );
};
