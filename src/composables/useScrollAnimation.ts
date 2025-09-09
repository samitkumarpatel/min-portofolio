import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement>()

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  onMounted(() => {
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    isVisible,
    elementRef
  }
}

export function useParallax() {
  const parallaxRef = ref<HTMLElement>()
  const offset = ref(0)

  const handleScroll = () => {
    if (parallaxRef.value) {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      offset.value = rate
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    parallaxRef,
    offset
  }
}

export function useMouseParallax() {
  const mouseX = ref(0)
  const mouseY = ref(0)

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.value = (event.clientX / window.innerWidth) * 2 - 1
    mouseY.value = -(event.clientY / window.innerHeight) * 2 + 1
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    mouseX,
    mouseY
  }
}
