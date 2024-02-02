import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { ThreeBarsIcon, XMarkIcon, MountainIcon } from '../Icons'

const elements = [
  {
    title: 'Nosotros',
    ref: '#',
  },
  {
    title: 'Productos',
    ref: '#',
  },
  {
    title: 'Ubicación',
    ref: '#',
  },
  {
    title: 'Contacto',
    ref: '#',
  },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const renderElements = () => {
    return (
      <>
        {elements &&
          elements.map((element, index) => {
            return (
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={element.ref}
                key={index}
                className="text-md font-medium"
              >
                {element.title}
              </motion.a>
            )
          })}
      </>
    )
  }

  const renderIcon = () => {
    if (isOpen) {
      return <XMarkIcon />
    } else {
      return <ThreeBarsIcon />
    }
  }

  const renderDropdownElements = () => {
    if (!isOpen) return

    return (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ height: 0 }}
        transition={{
          duration: 0.35,
          ease: 'easeInOut',
        }}
        className="md:hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mt-3 mb-6"
        >
          {elements &&
            elements.map((element, index) => {
              return (
                <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={element.ref}
                  key={index}
                  className="text-lg font-medium text-center w-full hover:bg-palm-dark rounded-xl py-2"
                >
                  {element.title}
                </motion.a>
              )
            })}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <header className="flex items-center px-4 md:px-6 bg-night text-pale">
      <nav className="flex flex-col w-full">
        <div className="flex flex-row justify-between py-5">
          <a className="flex items-center gap-2" href="#">
            <MountainIcon />
            <span className="text-lg font-semibold">Sombra Verde</span>
          </a>

          <div className="flex flex-col justify-center">
            <div className="hidden md:flex gap-6">{renderElements()}</div>

            <button onClick={handleToggle} className="flex md:hidden">
              <span className="sr-only">Open main menu</span>
              {renderIcon()}
            </button>
          </div>
        </div>
        <AnimatePresence>{renderDropdownElements()}</AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
