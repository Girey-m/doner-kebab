import styles from "@/components/LinkList/LinkList.module.css";
import Link from "next/link";

type linksItem = {
  linkTitle: string;
  linkAddress: string;
};

interface LinkListProps {
  title: string;
  links: linksItem[];
}

export default function LinkList({ title, links }: Readonly<LinkListProps>) {
  if (!Array.isArray(links) || links.length === 0) {
    return (
      <div className={styles.block}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.empty}>Нет доступных ссылок</p>
      </div>
    );
  }

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list} aria-label={`Ссылки раздела: ${title}`}>
        {links.map((el, index) => {
          return (
            <li className={styles.list_item} key={`${el.linkAddress}-${index}`}>
              <Link href={el.linkAddress} className={styles.link}>
                {el.linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
