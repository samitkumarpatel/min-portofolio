<template>
  <nav class="nav" :class="{ 'nav-scrolled': isScrolled, 'nav-mobile-open': isMobileMenuOpen }">
    <div class="nav-container">
      <div class="nav-brand">
        <h2 class="brand-text">Samit Kumar Patel</h2>
      </div>

      <ul class="nav-links" :class="{ 'nav-links-open': isMobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click="handleNavClick(link.id)"
            :class="{ active: activeSection === link.id }"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="nav-actions">
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :title="isLightTheme ? 'Switch to Dark Mode' : 'Switch to Light Mode'"
        >
          <span class="theme-icon">{{ isLightTheme ? '🌙' : '☀️' }}</span>
        </button>

        <div class="nav-toggle" @click="toggleMobileMenu">
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

// Inject theme state from parent
const isLightTheme = inject('isLightTheme', ref(false))
const toggleTheme = inject('toggleTheme', () => {})

const navLinks = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact', name: 'Contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i] as HTMLElement
    if (section.offsetTop <= scrollPosition) {
      activeSection.value = navLinks[i].id
      break
    }
  }
}

const handleNavClick = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--nav-background);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.nav-scrolled {
  background: var(--nav-background-scrolled);
  box-shadow: 0 2px 20px var(--shadow-primary);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand .brand-text {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);
}

.theme-toggle:hover {
  background: var(--background-light);
  border-color: var(--primary-color);
  transform: scale(1.1);
}

.theme-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(180deg);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 0.5rem;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-brand .brand-text {
    font-size: 1.2rem;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--nav-background-scrolled);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    transition: left 0.3s ease;
  }

  .nav-links-open {
    left: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  .nav-toggle {
    display: flex;
  }
}

/* Tablet Styles */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-container {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }
}

/* Large Desktop Styles */
@media (min-width: 1200px) {
  .nav-container {
    padding: 1rem 0;
  }
}
</style>
