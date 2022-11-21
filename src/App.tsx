import { Product } from "./components/Challenge";

export default function App() {
  return (
    <Product
      name="Shampoo"
      price={2.99}
      images={["image-1.png", "image-2.png"]}
    />
  );
}
