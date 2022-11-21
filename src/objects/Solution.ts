enum ProductStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

type Product = {
  name: string;
  price: number;
  images: string[];
  status: ProductStatus;
};

const product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  // alternative value "draft"
  status: ProductStatus.PUBLISHED,
} as Product;

function updateUser({
  firstName,
  age,
  isPremium,
}: {
  firstName: string;
  age: number;
  isPremium: boolean;
}) {}

type UserProfileProps = {
  firstName: string;
  age: number;
};
