import Image from "next/image";
import styles from "@/components/User/User.module.css";

export default function User() {
  return (
    <a href="home" className={styles.link}>
      <Image src="/user.svg" alt="пользователь" width={40} height={40} />
    </a>
  );
}
