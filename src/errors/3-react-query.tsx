// this one isn't easy and full of errors
import { useQuery } from "@tanstack/react-query";

async function fetchProduct() {
  return {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1", "image-2"],
  };
}

export function Product() {
  const { data, error } = useQuery(
    ["user"],
    {
      cacheTime: 100000,
    },
    () => fetchProduct()
  );

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
