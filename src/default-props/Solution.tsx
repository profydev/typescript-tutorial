type ProductProps = {
  name: string;
  price: number;
  images?: string[];
};

export function Product({ name, price, images = [] }: ProductProps) {
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
