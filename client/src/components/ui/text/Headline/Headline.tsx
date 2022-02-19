interface Props {
  children: React.ReactNode;
}

export const Headline = ({ children }: Props): JSX.Element => {
  return <h2>{children}</h2>;
};
