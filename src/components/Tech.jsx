import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadTextH5} flex justify-center`}>Leverage our software & hardware expertise</h1>
      </motion.div>

      <div className="w-full flex justify-center mb-11">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Use our services and tech expertise to create disruptive products & solutions that can revolutionize your business and stay ahead with evolving technological advancements.
        </motion.p>
      </div>


      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")