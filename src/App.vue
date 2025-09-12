<template>
  <div id="app">
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <!-- Header Section -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <img :src="portfolioData.personal.avatar" :alt="portfolioData.personal.name" class="avatar">
          <h1 class="name">{{ portfolioData.personal.name }}</h1>
          <p class="title">{{ portfolioData.personal.title }}</p>
          <p class="location">{{ portfolioData.personal.location }}</p>
          
          <div class="contact-info">
            <div class="contact-item">
              <span>📞</span>
              <span>{{ portfolioData.personal.contact.phone }}</span>
            </div>
            <div class="contact-item">
              <span>✉️</span>
              <a :href="`mailto:${portfolioData.personal.contact.email}`">
                {{ portfolioData.personal.contact.email }}
              </a>
            </div>
            <div class="contact-item">
              <span>💼</span>
              <a :href="portfolioData.personal.contact.linkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- Summary Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Professional Summary</h2>
            <p class="section-subtitle">15+ years of expertise in DevOps, Cloud-Native platforms, and Full-Stack Development</p>
          </div>
          <div class="section-content">
            <p class="summary-text">{{ portfolioData.summary.description }}</p>
            <p class="summary-text">{{ portfolioData.summary.dailyFocus }}</p>
            <p class="summary-text">{{ portfolioData.summary.genAI }}</p>
          </div>
        </section>

        <!-- Areas of Expertise -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Areas of Expertise</h2>
            <p class="section-subtitle">Core competencies and technical specializations</p>
          </div>
          <div class="section-content">
            <div class="expertise-grid">
              <div 
                v-for="expertise in portfolioData.expertise" 
                :key="expertise.category"
                class="expertise-item"
              >
                <h3 class="expertise-category">{{ expertise.category }}</h3>
                <p class="expertise-description">{{ expertise.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Professional Experience</h2>
            <p class="section-subtitle">Career progression and key achievements</p>
          </div>
          <div class="section-content">
            <div 
              v-for="(experience, index) in portfolioData.experience" 
              :key="index"
              class="experience-item"
            >
              <div class="experience-header">
                <h3 class="experience-company">{{ experience.company }}</h3>
                <h4 class="experience-position">{{ experience.position }}</h4>
                <div class="experience-meta">
                  <span>{{ experience.location }}</span> • 
                  <span>{{ experience.period }}</span>
                </div>
              </div>
              <ul class="responsibilities">
                <li v-for="(responsibility, idx) in experience.responsibilities" :key="idx">
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Technical Skills</h2>
            <p class="section-subtitle">Technologies, tools, and frameworks</p>
          </div>
          <div class="section-content">
            <div class="skills-grid">
              <div v-for="(skills, category) in portfolioData.skills" :key="category" class="skill-category">
                <h3 class="skill-category-title">{{ formatCategoryName(category) }}</h3>
                <div class="skill-tags">
                  <span 
                    v-for="skill in skills" 
                    :key="skill"
                    class="skill-tag"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Education</h2>
            <p class="section-subtitle">Academic background and qualifications</p>
          </div>
          <div class="section-content">
            <div class="education-item">
              <h3 class="education-institution">{{ portfolioData.education.institution }}</h3>
              <p class="education-degree">{{ portfolioData.education.degree }}</p>
              <p class="education-period">{{ portfolioData.education.period }}</p>
            </div>
          </div>
        </section>

        <!-- Certifications Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Certifications</h2>
            <p class="section-subtitle">Professional certifications and achievements</p>
          </div>
          <div class="section-content">
            <ul class="certifications-list">
              <li v-for="cert in portfolioData.certifications" :key="cert">
                {{ cert }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Languages Section -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-title">Languages</h2>
            <p class="section-subtitle">Language proficiency</p>
          </div>
          <div class="section-content">
            <div class="languages-list">
              <span 
                v-for="language in portfolioData.languages" 
                :key="language"
                class="language-tag"
              >
                {{ language }}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import portfolioData from './data/portfolio.json'
import ThemeToggle from './components/ThemeToggle.vue'

export default {
  name: 'App',
  components: {
    ThemeToggle
  },
  data() {
    return {
      portfolioData
    }
  },
  methods: {
    formatCategoryName(category) {
      // Convert camelCase to readable format
      return category
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim()
    }
  }
}
</script>
