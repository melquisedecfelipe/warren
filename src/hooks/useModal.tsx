import { useState, useCallback } from 'react'

interface ModalReturn {
  isShowing: boolean
  handleToggle: () => void
}

const useModal = (): ModalReturn => {
  const [isShowing, setIsShowing] = useState(false)

  const handleToggle = useCallback(() => {
    if (isShowing === true) {
      document.getElementsByTagName('body')[0].style.overflowY = 'visible'
      setIsShowing(false)
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      setIsShowing(true)
    }
  }, [isShowing])

  return { isShowing, handleToggle }
}

export default useModal
