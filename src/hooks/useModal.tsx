import { useState, useCallback } from 'react'

interface ModalReturn {
  isShowing: boolean
  handleToggle: () => void
}

const useModal = (): ModalReturn => {
  const [isShowing, setIsShowing] = useState(false)

  const handleToggle = useCallback(() => {
    setIsShowing(!isShowing)
  }, [isShowing])

  return { isShowing, handleToggle }
}

export default useModal
