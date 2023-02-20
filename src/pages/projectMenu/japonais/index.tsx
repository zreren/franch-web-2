import React from "react";
import styles from './index.module.css';
import japonais1 from '@/public/images/foods/japonais/japonais1.png'
import japonais2 from '@/public/images/foods/japonais/japonais2.png'
import japonais3 from '@/public/images/foods/japonais/japonais3.png'
import japonais4 from '@/public/images/foods/japonais/japonais4.png'
import japonais5 from '@/public/images/foods/japonais/japonais5.png'
import japonais6 from '@/public/images/foods/japonais/japonais6.png'
import japonais7 from '@/public/images/foods/japonais/japonais7.png'
import japonais8 from '@/public/images/foods/japonais/japonais8.png'
import edesignLogo from '@/public/images/edesignLogo.png';
import FooterLocation from "@/components/FooterLocation";

export default function Japonais() {

  return (
    <div className={styles.japonais}>
      <div className={styles.logo}>
        <img src={edesignLogo.src} alt="" />
      </div>
      <div className={styles.title}>
        <span>Japonais</span>
        <div>日餐</div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <img src={japonais1.src} alt="" />
          <img src={japonais4.src} alt="" />
          <img src={japonais7.src} alt="" />
        </div>
        <div className={styles.contentItem}>
        <img src={japonais2.src} alt="" />
        <img src={japonais5.src} alt="" />
        <img src={japonais8.src} alt="" />
        </div>
        <div className={styles.contentItem}>
        <img src={japonais3.src} alt="" />
        <img src={japonais6.src} alt="" />
        </div>
      </div>
        <div className="fixed bottom-0 md:px-12 px-2 w-full">
        <FooterLocation leftLocation="/projectMenu?active=design" />
        </div>
    </div>
  )
}