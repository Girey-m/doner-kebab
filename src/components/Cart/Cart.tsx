import Image from "next/image";
import styles from "@/components/Cart/Cart.module.css";
export default function Cart() {
  return (
    <a href="cart" className={styles.link}>
      <Image src="/cart.svg" alt="Корзина" width={40} height={40} />
    </a>
  );
}
