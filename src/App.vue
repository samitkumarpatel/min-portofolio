<template>
  <div id="app">
    <!-- Navigation -->
    <ResponsiveNav />

    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { RouterView } from 'vue-router'
import ResponsiveNav from './components/ResponsiveNav.vue'

// Theme management
const isLightTheme = ref(false)

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value
  localStorage.setItem('theme', isLightTheme.value ? 'light' : 'dark')

  // Apply theme class to root element
  if (isLightTheme.value) {
    document.documentElement.classList.add('light-theme')
  } else {
    document.documentElement.classList.remove('light-theme')
  }
}

// Provide theme state to child components
provide('isLightTheme', isLightTheme)
provide('toggleTheme', toggleTheme)

onMounted(() => {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isLightTheme.value = savedTheme === 'light'
  } else {
    // Default to system preference
    isLightTheme.value = window.matchMedia('(prefers-color-scheme: light)').matches
  }

  // Apply theme class to root element on mount
  if (isLightTheme.value) {
    document.documentElement.classList.add('light-theme')
  } else {
    document.documentElement.classList.remove('light-theme')
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/* Default dark theme variables */
:root {
  --background-dark: #0a0a0a;
  --background-light: rgba(255, 255, 255, 0.05);
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --text-muted: #888888;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(0, 212, 255, 0.3);
  --shadow-primary: rgba(0, 212, 255, 0.2);
  --shadow-glow: rgba(0, 212, 255, 0.3);
  --nav-background: rgba(10, 10, 10, 0.9);
  --nav-background-scrolled: rgba(10, 10, 10, 0.95);
}

/* Light theme variables */
:root.light-theme {
  --background-dark: #ffffff;
  --background-light: rgba(0, 0, 0, 0.05);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --border-color: rgba(0, 0, 0, 0.1);
  --border-hover: rgba(0, 212, 255, 0.3);
  --shadow-primary: rgba(0, 0, 0, 0.1);
  --shadow-glow: rgba(0, 212, 255, 0.3);
  --nav-background: rgba(255, 255, 255, 0.9);
  --nav-background-scrolled: rgba(255, 255, 255, 0.95);

  /* Professional button colors for light mode */
  --btn-primary-bg: #2563eb;
  --btn-primary-text: #ffffff;
  --btn-secondary-bg: #f8fafc;
  --btn-secondary-text: #2563eb;
  --btn-secondary-border: #e2e8f0;

  /* Professional pill colors for light mode */
  --pill-bg: #f1f5f9;
  --pill-text: #475569;
  --pill-border: #e2e8f0;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  background: var(--background-dark);
  color: var(--text-primary);
  overflow-x: hidden;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

#app {
  position: relative;
  min-height: 100vh;
}

.main-content {
  position: relative;
  z-index: 1;
}
</style>
