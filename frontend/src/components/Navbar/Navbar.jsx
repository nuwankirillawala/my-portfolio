import './Navbar.scss'
import { images } from '../../constants/index'
import { HiMenu, HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'

const menuItems = ['home','about', 'work', 'experience', 'skills', 'testimonials', 'contact', ];

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
        {/* <h2>Nuwan Kirillawala</h2> */}
      </div>
      <ul className='app__navbar-links'>
        {menuItems.map(item => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Hambureg navbar menu */}

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {menuItems.map(item => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar