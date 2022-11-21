type Product = {
  name: string;
  price: number;
  images: string[];
};

function updateProduct({ name, price, images }: Product): Product {
  // update logic here ...
  return { name, price, images };
}

const product = updateProduct({
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
});

// we don't need to define the return type here
// TS can infer it from the return value
function updateProductAlternative(product: Product) {
  // update logic here ...
  return product;
}

// the type is inferred
const productWithInferredType = updateProductAlternative({
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
});
