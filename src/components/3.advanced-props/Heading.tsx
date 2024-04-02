import React from "react";

type HeadingProps = {
  children: string;
};

type OscarProps = {
    children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};

export const Oscar = ({children} : OscarProps) => {
  return <div>{children}</div>;
};
