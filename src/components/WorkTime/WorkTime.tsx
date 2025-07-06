import styles from "@/components/WorkTime/WorkTime.module.css";

interface WorkTimeProps {
  startDay?: string;
  endDay?: string;
  startTime?: string;
  endTime?: string;
}

export default function WorkTime({
  startDay = "ПН",
  endDay = "ПТ",
  startTime = "08:00",
  endTime = "00:00",
}: Readonly<WorkTimeProps>) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Рабочие часы:</h3>
      <p
        className={styles.text}
      >{`${startDay}-${endDay} ${startTime}-${endTime}`}</p>
    </div>
  );
}
