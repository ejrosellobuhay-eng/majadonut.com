import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Adds a fade/slide-up reveal animation to elements once they enter the viewport.
 * Usage: const root = ref(null); useScrollReveal(root, '[data-reveal]')
 */
export function useScrollReveal(rootRef, selector = '[data-reveal]') {
  let observer

  onMounted(() => {
    const targets = rootRef.value ? rootRef.value.querySelectorAll(selector) : []
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            entry.target.style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    targets.forEach((el) => {
      el.style.opacity = '0'
      observer.observe(el)
    })
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}

export function useActiveSection(sectionIds) {
  const activeId = ref(sectionIds[0])
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeId.value = entry.target.id
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return activeId
}
