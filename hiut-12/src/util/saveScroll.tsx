import { useEffect } from 'react'

export default function ScrollMemory() {
  useEffect(() => {
    const savedY = sessionStorage.getItem('scrollY')
    if (savedY) {
      window.scrollTo(0, parseInt(savedY, 10))
    }
  }, [])

  return null
}
