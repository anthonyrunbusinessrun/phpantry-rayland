'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = ['.reveal', '.apple-fade', '.apple-fade-only', '.apple-scale', '.apple-left', '.apple-right']
    const allEls = document.querySelectorAll(selectors.join(','))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay || 0)
            setTimeout(() => el.classList.add('visible'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    allEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
