// Challenge: Make the images optional and
// use an empty array as default

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

export function Product({ name, price, images }: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}
