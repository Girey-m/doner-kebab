import Image from "next/image";
export default function Cart() {
  return (
    <a href="cart">
      <Image src="/cart.svg" alt="Корзина" width={40} height={40} />
    </a>
  );
}
