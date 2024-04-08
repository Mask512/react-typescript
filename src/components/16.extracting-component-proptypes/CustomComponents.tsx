import React from 'react';
import Greets from '../2.basic-props';

export const CustomComponent = (props: React.ComponentProps<typeof Greets>) => {
  return (
    <>
    <div>{props.isLoggedIn}</div>
    <div>{props.name}</div>
    <div>{props.messagesCount}</div>
    </>
  );
};
