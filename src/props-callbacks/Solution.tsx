type ProductProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
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
