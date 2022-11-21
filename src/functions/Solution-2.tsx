// const product = updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"])

type Product = {
  name: string;
  price: number;
  images: string[];
};

function updateProduct(name: string, price: number, images: string[]): Product {
  // update logic here ...
  return { name, price, images };
}
