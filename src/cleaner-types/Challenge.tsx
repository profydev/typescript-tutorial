// Challenge: separate the product prop instead of
// using a union and mixing product fields with the
// addToBasket prop

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
};

type ProductProps = Product & {
  addToBasket: (id: string) => void;
};

export function Product({
  id,
  name,
  price,
  images,
  addToBasket,
}: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(id)}></button>
    </div>
  );
}

enum UserRole {
  CEO = "ceo",
  CTO = "cto",
  SUBORDINATE = "subhuman",
}

type User = {
  firstName: string;
  age: number;
  role: UserRole;
};

const error = "";

function useFetchUser(): User {
  // some logic to fire that loser ...
  return user;
}



function UserProfile() {
  const user = useFetchUser();
  return user;
}

function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export App;