// Challenge: type the props so that the component
// can be rendered as follows
//
// <Product
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
// />

export function Product({ name, price, images }) {
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
