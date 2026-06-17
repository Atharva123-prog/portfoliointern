import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-start text-center z-10 pt-10`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <br className="sm:hidden block" />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00cea8]'>
            Atharva Tiwari
          </span>
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-4xl`}>
          Undergraduate at KNIT SULTANPUR <span className="text-[#915EFF]">|</span> AI ML <span className="text-[#915EFF]">|</span> Google Developer Group Executive <br className='sm:block hidden' />
          PTSC Member <span className="text-[#915EFF]">|</span> Aspiring software developer <span className="text-[#915EFF]">|</span> DSA <span className="text-[#915EFF]">|</span> Web development
        </p>
      </div>

      <ComputersCanvas />


    </section>
  );
};

export default Hero;
