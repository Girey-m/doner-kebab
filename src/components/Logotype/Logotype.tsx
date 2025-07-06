"use client";

import Image from "next/image";
import Link from "next/link";
import style from "@/components/Logotype/Logotype.module.css";

interface LogotypeProps {
  width?: number;
  height?: number;
  href?: string;
  priority?: boolean;
}

export default function Logotype({
  width = 300,
  height = 100,
  priority = false,
  href = "#",
}: Readonly<LogotypeProps>) {
  return (
    <Link href={href} className={style.logotype_link}>
      <Image
        src="/logotype.svg"
        alt="Логотип"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
}
