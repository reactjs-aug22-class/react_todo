import React, { useState } from 'react'

import ModalContext from './todoEditModal.context'

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = { isOpen, setIsOpen }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalProvider
