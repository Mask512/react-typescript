type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <>
      {names.map((name, index) => (
        <p key={index}>
          {name.first} {name.last}
        </p>
      ))}
    </>
  );
};
