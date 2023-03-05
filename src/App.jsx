import React from "react";
import styles from "./styles";
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stat, Footer, Testimonials, Hero } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>Navbar</div>
      </div>
      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-white">Hero</h1>
        </div>
      </div>
      {/* hero section end */}
      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-white">start</h1>
          <h1 className="text-white">business </h1>
          <h1 className="text-white">billing </h1>
          <h1 className="text-white">casddeal </h1>
          <h1 className="text-white">testimonial </h1>
          <h1 className="text-white">clients </h1>
          <h1 className="text-white">CTA </h1>
          <h1 className="text-white">footer</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
