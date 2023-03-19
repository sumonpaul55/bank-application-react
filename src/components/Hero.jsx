import React from "react";
import styles from "../styles";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-col w-full xl:px-0 sm:px-16 px-4`}>
      <div className="flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 px-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-white flex-1 text-[52px] ss:text-[72px] font-semibold font-poppins ss:leading-[100px] leading-[75px]">
          The Next <br className="hidden sm:block" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="hidden ss:flex mr-0 ss:m-4 text-white">
          <GetStarted />
        </div>
      </div>
      <h1 className="text-white text-[52px] ss:text-[64px] font-semibold font-poppins ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-8`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
      </p>
    </div>
    <div className="w-full">
      <img src={robot} alt="billing" className="w-full h-full z-[5] relative" />
      <div className="absolute w-[40%] h-[35%] pink__gradient top-0 z-[0]" />
      <div className="absolute w-[80%] h-[80%] white__gradient bottom-[40%] z-[1]" />
    </div>
  </section>
);

export default Hero;
