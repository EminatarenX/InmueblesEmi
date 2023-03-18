import { color } from 'framer-motion'
import React from 'react'
import { useState,useEffect } from 'react'
import {motion as m} from 'framer-motion'
import { BiChevronsUp,  } from 'react-icons/bi'
import { FaAccessibleIcon} from 'react-icons/fa'

const BotonScroll = () => {
  const [boton, setBoton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if(window.scrollY > 100) {
        setBoton(true)
      }else {
        setBoton(false)
      }
    })
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      
    >
      {boton &&(
        <m.button
        initial={{opacity: 0,scale: 0}}
        animate={{opacity: 1,scale: 1}}
        transition={{
          duration: 0.5
        }}
        onClick={scrollUp} style={{
          position: 'fixed',
          backgroundColor: '#0E4C70',
          height: '120px',
          width: '120px',
          borderRadius: '60px',
          marginLeft: '50px',
          bottom: '50px',
          right: '50px'
          ,fontSize: '50px',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
          
        }}> 
        <BiChevronsUp/> 
        {/* <FaAccessibleIcon/> */}
        </m.button>
      )}
    </div>
  )
}

export default BotonScroll