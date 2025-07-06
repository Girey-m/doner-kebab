import styles from "@/components/ForAnyQuestion/ForAnyQuestion.module.css";

interface ForAnyQuestionProps {
  mail?: string;
}

export default function ForAnyQuestion({
  mail = "example@example.com",
}: Readonly<ForAnyQuestionProps>) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>По любым вопросам:</h3>
      <a className={styles.mail} href={`mailto:${mail}`}>
        {`${mail}`}
      </a>
    </div>
  );
}
