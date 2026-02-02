import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

const Banner = () => {
  return (
    <section
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg font-titleFont tracking-wide text-textGreen'
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
      >
        Rithika S.
        <span className='text-textDark mt-2 lgl:mt-4'>Software Developer.</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-base md:max-w-[650px] text-textDark font-medium'
      >
        Final-year CS undergrad building scalable MERN applications with a
        strong DSA foundation.
      </motion.p>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className='flex gap-4'
      >
        <a
          href='https://github.com/Rithikakalaimani'
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center text-xl text-textLight hover:text-textGreen hover:-translate-y-1 transition-all duration-300'
          title='GitHub'
        >
          <TbBrandGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/rithika-kalaimani-s24/'
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center text-xl text-textLight hover:text-textGreen hover:-translate-y-1 transition-all duration-300'
          title='LinkedIn'
        >
          <SlSocialLinkedin />
        </a>
      </motion.div>
      <a href='#project'>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
