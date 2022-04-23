import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Nav() {
  // Animations Variants
  const headerVariant = {
    hidden: {
      opacity: 0, 
      y:-200
    },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring', 
        duration: .7, 
        bounce: .35, 
        staggerChildren: .5
      }
    }
  }
  const linkVariant = {
    hidden: {
      opacity: 0, 
      scale: 0,
    },
    visible: {
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring', 
        duration: .5, 
        bounce: .35, 
      }
    },
    hover: {
      scale: 1.1,
      opacity: .7
    },
  }
  const containerVariant = {
    visible: {
      transition: {
        delayChildren: .4,
        staggerChildren: .2
      }
    }
  }

  return (
      <motion.div initial='hidden' animate='visible' exit='exit' className='py-8 space-y-6' >
          <motion.div variants={headerVariant} className='text-4xl' >PowerSell Cheat Sheet</motion.div>
          <motion.ul variants={containerVariant} initial={false} className='flex justify-center font-semibold text-white space-x-4'>
            <motion.div variants={linkVariant}>
              <motion.div whileHover={{...linkVariant.hover}}>
                <NavLink to='/' className='px-6 py-2 bg-sky-500 rounded-md'>CheatSheet</NavLink>
              </motion.div>
            </motion.div>
            <motion.div variants={linkVariant}>
              <motion.div whileHover={{...linkVariant.hover}}>
                <NavLink to='/about' className='px-6 py-2 bg-sky-500 rounded-md'>About</NavLink>
              </motion.div>
            </motion.div>
          </motion.ul>
      </motion.div>
  )
}
