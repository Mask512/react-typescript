type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  return (
    <h1>
      My name is {name.first} {name.last}
    </h1>
  );
};
