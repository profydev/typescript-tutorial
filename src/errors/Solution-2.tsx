import styled from "styled-components";

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

const ProductContainer = styled.div<{ isHighlighted: boolean }>`
  border: ${(props) => (props.isHighlighted ? "1px solid red" : "none")};
`;

export function Product({ name, price, images }: ProductProps) {
  return (
    <ProductContainer isHighlighted>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
    </ProductContainer>
  );
}
