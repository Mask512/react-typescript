type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export const Status = ({ status }: StatusProps) => {
  const message =
    status === 'loading'
      ? 'Loading...'
      : status === 'success'
      ? 'Data Fetched successfully!'
      : 'Error Fetching Data';

  return (
    <>
      <h2>{message}</h2>
    </>
  );
};
