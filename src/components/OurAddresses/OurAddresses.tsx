import styles from "@/components/OurAddresses/OurAddresses.module.css";

interface OurAddressesProps {
  city?: string;
  addresses?: string[];
}

export default function OurAddresses({
  city = "Симферополь",
  addresses = ["Проспект Победы, 91"],
}: Readonly<OurAddressesProps>) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Наш адрес:</h3>
      <p className={styles.city}>{city}</p>
      <div className={styles.addresses_block}>
        {addresses.map((el, index) => {
          return (
            <p
              className={styles.addresses_text}
              key={`address${index}-${index}`}
            >
              {el}
            </p>
          );
        })}
      </div>
    </div>
  );
}
