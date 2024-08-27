import React from 'react'
import planet from "../../assets/me/planet.png"
import planet1 from "../../assets/me/planet1.png"
import asteroid from "../../assets/me/asteroid.png"
import asteroid1 from "../../assets/me/asteroid1.png"
import asteroid2 from "../../assets/me/asteroid2.png"
import astronaut from "../../assets/me/astronaut.png"
import astronaut1 from "../../assets/me/astronaut1.png"
import sun from "../../assets/me/sun.png"
import { motion, AnimatePresence } from 'framer-motion'

function Background() {
  return (
    <div className='h-full absolute top-0 w-full -z-10'>
      <motion.img 
      initial= {{ y: 0, x :0 , scale: 1}}
      animate={{ scale: 0.8, y: -500, x: -200, transition: { duration: 5, ease: "easeInOut"} }}
      
       src={sun} className='absolute' alt="" />

       <motion.img src="" alt="" />
    </div>
  )
}

export default Background
