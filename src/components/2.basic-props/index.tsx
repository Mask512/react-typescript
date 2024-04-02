type GreetsProps = {
  name?: string;
  messagesCount: number;
  isLoggedIn?: boolean;
};

export default function Greets({name, messagesCount, isLoggedIn}:GreetsProps) {
  return (
    <h1>
      Welcome {isLoggedIn ? `${name} You Have ${messagesCount} unread messages !` : 'Guest' }
    </h1>
  );
}
