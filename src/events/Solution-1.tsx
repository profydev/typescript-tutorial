// Challenge: Type the event param in the onClick handler

export function ProductCard() {
  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  return <div onClick={onClick}>Fire this loser!</div>;
}
