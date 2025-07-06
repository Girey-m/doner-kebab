import styles from "@/components/layout/Header/Header.module.css";
import Logotype from "@/components/Logotype/Logotype";
import Navigation from "@/components/Navigation/Navigation";
import Cart from "@/components/Cart/Cart";
import User from "@/components/User/User";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <Logotype priority={true}/>
          <Navigation />
          <div className={styles.container_icons}>
            <Cart />
            <User />
          </div>
        </div>
      </div>
    </header>
  );
}
