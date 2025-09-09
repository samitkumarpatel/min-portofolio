<template>
  <div 
    class="card-3d"
    :class="{ 'is-visible': isVisible }"
    ref="cardRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <div class="card-content">
      <slot />
    </div>
    <div class="card-glow"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { isVisible, elementRef: cardRef } = useScrollAnimation()

const handleMouseEnter = () => {
  if (cardRef.value) {
    cardRef.value.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)'
  }
}

const handleMouseLeave = () => {
  if (cardRef.value) {
    cardRef.value.style.transform = 'translateY(0) rotateX(0) rotateY(0)'
  }
}

const handleMouseMove = (event: MouseEvent) => {
  if (!cardRef.value) return
  
  const rect = cardRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  cardRef.value.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

onMounted(() => {
  // Component mounted
})
</script>

<style scoped>
.card-3d {
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  overflow: hidden;
}

.card-3d.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-3d:hover {
  border-color: var(--primary-color);
  box-shadow: 0 20px 40px var(--shadow-primary);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card-3d:hover .card-glow {
  opacity: 0.1;
}

/* Animation delays for staggered effect */
.card-3d:nth-child(1) { transition-delay: 0.1s; }
.card-3d:nth-child(2) { transition-delay: 0.2s; }
.card-3d:nth-child(3) { transition-delay: 0.3s; }
.card-3d:nth-child(4) { transition-delay: 0.4s; }
.card-3d:nth-child(5) { transition-delay: 0.5s; }
.card-3d:nth-child(6) { transition-delay: 0.6s; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-3d {
    padding: 1.5rem;
  }
  
  .card-3d:hover {
    transform: translateY(-5px) rotateX(0) rotateY(0);
  }
}
</style>
