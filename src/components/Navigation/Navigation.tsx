import styles from "@/components/Navigation/Navigation.module.css";
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
              <a className={styles.link} href={el.path}>
                {el.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
