import styles from "@/components/Navigation/Navigation.module.css";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        {[
          {
            path: "/",
            name: "Главная",
          },
          {
            path: "catalog",
            name: "Каталог",
          },
          {
            path: "aboutus",
            name: "О нас",
          },
        ].map((el) => {
          return (
            <li key={el.name}>
              <Link className={styles.link} href={el.path}>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
