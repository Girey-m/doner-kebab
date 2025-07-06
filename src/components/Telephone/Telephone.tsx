import styles from "@/components/Telephone/Telephone.module.css";

interface TelephoneProps {
  tel?: string;
}

export default function Telephone({
  tel = "+79789257178",
}: Readonly<TelephoneProps>) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Телефон:</h3>
      <a href={`tel:${tel}`} className={styles.tel_link}>{`${tel}`}</a>
    </div>
  );
}
