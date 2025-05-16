"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { rootMargin = "-20% 0px -80% 0px" } = options ?? {}

  useEffect(() => {
    const elements = selectors.map((selector) => document.querySelector(selector))

    if (elements.some((el) => el === null)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("id"))
          }
        })
      },
      {
        rootMargin,
        ...options,
      },
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [selectors, rootMargin, options])

  return activeId
}
