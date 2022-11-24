// extracting all the product fields to a
// separate type is even cleaner

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
};

type ProductProps = {
  product: Product;
  addToBasket: (id: string) => void;
};

export function Product({ product, addToBasket }: ProductProps) {
  return (
    <div>
      <div>
        {product.name} ${product.price}
      </div>
      {product.images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(product.id)}></button>
    </div>
  );
}
