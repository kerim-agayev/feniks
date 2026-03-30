import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTextReveal(selector: string, options?: { delay?: number; stagger?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: options?.stagger ?? 0.1,
        delay: options?.delay ?? 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, options?.delay, options?.stagger])

  return containerRef
}

export function useParallax(selector: string, yPercent: number = -30) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.to(el, {
          yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, yPercent])

  return containerRef
}

export function useWipeReveal(selector: string) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector])

  return containerRef
}

export function useFadeInUp(selector: string, stagger: number = 0.15) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [selector, stagger])

  return containerRef
}
