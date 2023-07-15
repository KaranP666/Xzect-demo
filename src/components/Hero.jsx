import React from 'react'
import { slideIn } from '../utils/motion';
import { motion } from "framer-motion";
import { styles } from '../styles'
import { EarthCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-[#bd1052]`}>Build, <span className="text-[#915eff]">test,</span> <span className="text-[#a2a2a2]">test,</span></h1>
          <h1 className={`${styles.heroHeadText} text-[#019267]`}> execute your</h1>
          <h1 className={`${styles.heroHeadText} text-white`}><span className="text-[#019267]">ideas </span><span className="text-[#915eff]">with our</span></h1>
          <h1 className={`${styles.heroHeadText} text-[#f1ae50]`}> innovative solutions <span className="text-[#915eff]"></span></h1>
        </div>
        <div className="w-[600px] h-[600px]">
          <EarthCanvas />
        </div>
      </div>


      <div className="absolute  xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#works">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero