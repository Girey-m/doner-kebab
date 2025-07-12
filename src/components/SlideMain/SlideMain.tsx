"use client";

import Image from "next/image";
import styles from "@/components/SlideMain/SlideMain.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SliderProps {
  slidePath: string;
  slideTitle: string;
  slideDescription: string;
}

interface SliderMainProps {
  data: SliderProps[];
}

export default function SlideMain({ data }: Readonly<SliderMainProps>) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const item = data[currentSlide];

  return (
    <section className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.slidePath}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.slide}
        >
          <div className={styles.text_block}>
            <h2 className={styles.title}>{`${item.slideTitle}`}</h2>
            <p className={styles.text}>{`${item.slideDescription}`}</p>
          </div>
          <Image
            src={`${item.slidePath}`}
            alt={`${item.slideTitle}`}
            width={400}
            height={400}
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
