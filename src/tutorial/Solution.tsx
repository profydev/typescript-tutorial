type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

function Product({ name, price, images }: ProductProps) {
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

export default function App() {
  return (
    <Product
      name="Shampoo"
      price={2.99}
      images={["image-1.png", "image-2.png"]}
    />
  );
}
