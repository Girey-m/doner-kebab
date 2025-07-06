import styles from "@/components/LinkList/LinkList.module.css";
import Link from "next/link";

type links = {
  linkTitle: string;
  linkAddress: string;
};

interface LinkListProps {
  title: string;
  links: links[];
}

export default function LinkList({ title, links }: Readonly<LinkListProps>) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {links.map((el, index) => {
          return (
            <li className={styles.list_item} key={`item-${index}-${index}`}>
              <Link
                href={el.linkAddress}
                className={styles.link}
                key={`item-${el.linkAddress}-${index}`}
              >
                {el.linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
