// type ListProps = {
//   items: string[]; // cannot assign array of another type
//   onClick: (value: string) => void;
// };

// Generics

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// export const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
export const List = <T extends {id: number}>({ items, onClick }: ListProps<T>) => { // if object
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              padding: '1rem',
              marginInline: '1rem',
            }}
            onClick={() => onClick(item)}
          >
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
