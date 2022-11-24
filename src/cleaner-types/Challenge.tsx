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
