import { UserContextProvider } from './UserContext';
import { User } from './User';

export default function Context() {
  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  );
}
