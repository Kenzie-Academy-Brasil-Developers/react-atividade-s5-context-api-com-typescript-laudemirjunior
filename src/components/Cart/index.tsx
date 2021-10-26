import React, { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartType {
  item: Product;
}

export default function Cart({ item }: CartType) {
  const { deleteProduct } = useContext(CartContext);
  return (
    <Container key={item.id}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => deleteProduct(item)}>Remover</button>
    </Container>
  );
}
