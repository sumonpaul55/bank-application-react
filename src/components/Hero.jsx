import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white"> 20%</span>
          Discount for
          <span className="text-white">1 Month</span>
          <span className="">Account</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
