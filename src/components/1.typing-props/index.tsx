type GreetProps = {
  name?: string;
};

export default function Greet({name = 'Guest'}:GreetProps) {
  return <h1>Welcome {name}</h1>;
}
