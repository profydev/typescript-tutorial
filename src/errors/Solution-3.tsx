import { useQuery } from "@tanstack/react-query";

type Product = {
  name: string;
  price: number;
  images: string[];
};

async function fetchProduct() {
  return {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1", "image-2"],
  } as Product;
}

export function Product() {
  const { data, isLoading, error } = useQuery<Product, Error>(
    ["user"],
    () => fetchProduct(),
    {
      cacheTime: 100000,
    }
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>An error ocurred: {error.message}</div>;
  }

  return (
    <div>
      <div>
        {data.name} ${data.price}
      </div>
      {data.images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}
