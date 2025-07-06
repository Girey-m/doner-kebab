import Logotype from "@/components/Logotype/Logotype";
import Telephone from "@/components/Telephone/Telephone";
import WorkTime from "@/components/WorkTime/WorkTime";
import OurAddresses from "@/components/OurAddresses/OurAddresses";
import styles from "@/components/layout/Footer/Footer.module.css";
import ForAnyQuestion from "@/components/ForAnyQuestion/ForAnyQuestion";
import LinkList from "@/components/LinkList/LinkList";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_wrapper}>
          <div className={styles.left_block}>
            <div>
              <div className={styles.block}>
                <Telephone />
                <WorkTime />
              </div>
              <Logotype width={200} height={80} />
            </div>
            <div className={styles.address}>
              <OurAddresses />
              <ForAnyQuestion />
            </div>
          </div>
          <div className={styles.right_block}>
            <LinkList
              title="Для гостей"
              links={[
                { linkTitle: "Меню", linkAddress: "#" },
                { linkTitle: "Акции", linkAddress: "#" },
              ]}
            />
            <LinkList
              title="О доставке"
              links={[
                { linkTitle: "Контакты", linkAddress: "#" },
                { linkTitle: "О компании", linkAddress: "#" },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
