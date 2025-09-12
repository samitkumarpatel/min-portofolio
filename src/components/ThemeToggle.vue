<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span class="theme-icon">
      {{ isDark ? '☀️' : '🌙' }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.isDark = savedTheme === 'dark'
    } else {
      // Check system preference
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    applyTheme() {
      const root = document.documentElement
      if (this.isDark) {
        root.classList.add('dark-theme')
        root.classList.remove('light-theme')
      } else {
        root.classList.add('light-theme')
        root.classList.remove('dark-theme')
      }
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-medium);
  backdrop-filter: blur(10px);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-large);
  border-color: var(--accent-color);
}

.theme-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(180deg);
}

/* Dark mode specific styling */
.dark-theme .theme-toggle {
  background: var(--bg-secondary);
  border-color: var(--border-color);
  box-shadow: var(--shadow-medium), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.dark-theme .theme-toggle:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-large), 0 0 0 1px rgba(255, 255, 255, 0.2);
}

/* Responsive positioning */
@media (max-width: 768px) {
  .theme-toggle {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
  
  .theme-icon {
    font-size: 1rem;
  }
}
</style>
