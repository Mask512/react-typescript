import { UserContext } from './UserContext';
import { useContext } from 'react';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
      userContext.setUser({
        name: 'Dhimas',
        email: 'mask@gmail.com',
      });
  };
  const handleLogout = () => {
      userContext.setUser(null);
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
      <div>User name is :{userContext.user?.name}</div>
      <div>User email is : {userContext.user?.email}</div>
    </div>
  );
};
