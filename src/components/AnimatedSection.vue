<template>
  <section 
    :id="sectionId" 
    class="animated-section"
    :class="{ 'is-visible': isVisible }"
    ref="sectionRef"
  >
    <div class="container">
      <h2 
        class="section-title"
        :class="{ 'animate': isVisible }"
      >
        {{ title }}
      </h2>
      <div 
        class="section-content"
        :class="{ 'animate': isVisible }"
      >
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

interface Props {
  sectionId: string
  title: string
}

defineProps<Props>()

const { isVisible, elementRef: sectionRef } = useScrollAnimation()

onMounted(() => {
  // Component mounted
})
</script>

<style scoped>
.animated-section {
  padding: var(--section-gap) 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.animated-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.section-title.animate {
  opacity: 1;
  transform: translateY(0);
}

.section-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.2s;
}

.section-content.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .animated-section {
    padding: 4rem 0;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .animated-section {
    padding: 6rem 0;
  }
}
</style>
