<template>
  <div id="app">
    <!-- Theme Toggle -->
    <ThemeToggle />
    
    <!-- Resume Layout -->
    <div class="resume-container">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <!-- Profile Image -->
        <div class="profile-section">
          <img :src="portfolioData.personal.avatar" :alt="portfolioData.personal.name" class="profile-image">
        </div>

        <!-- Contact Information -->
        <div class="sidebar-section">
          <h3 class="sidebar-title">Contact Information</h3>
          <div class="contact-item">
            <span class="contact-icon">🏠</span>
            <span>{{ portfolioData.personal.location }}</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span>{{ portfolioData.personal.contact.phone }}</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <a :href="`mailto:${portfolioData.personal.contact.email}`">
              {{ portfolioData.personal.contact.email }}
            </a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💼</span>
            <a :href="portfolioData.personal.contact.linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <!-- Education -->
        <div class="sidebar-section">
          <h3 class="sidebar-title">Education</h3>
          <div class="education-item">
            <h4 class="education-degree">{{ portfolioData.education.degree }}</h4>
            <p class="education-institution">{{ portfolioData.education.institution }}</p>
            <p class="education-location">{{ portfolioData.education.period }}</p>
          </div>
        </div>

        <!-- Certifications -->
        <div class="sidebar-section">
          <h3 class="sidebar-title">Certifications</h3>
          <ul class="certifications-list">
            <li v-for="cert in portfolioData.certifications" :key="cert">
              {{ cert }}
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="sidebar-section">
          <h3 class="sidebar-title">Languages</h3>
          <ul class="languages-list">
            <li v-for="language in portfolioData.languages" :key="language">
              {{ language }}
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Header with Name and Summary -->
        <header class="resume-header">
          <h1 class="resume-name">{{ portfolioData.personal.name }}</h1>
          <div class="summary-content">
            <p>{{ portfolioData.summary.description }}</p>
            <p>{{ portfolioData.summary.dailyFocus }}</p>
            <p>{{ portfolioData.summary.genAI }}</p>
          </div>
        </header>

        <!-- Areas of Expertise -->
        <section class="content-section">
          <h2 class="section-title">Areas of Expertise</h2>
          <ul class="expertise-list">
            <li v-for="expertise in portfolioData.expertise" :key="expertise.category">
              <strong>{{ expertise.category }}:</strong> {{ expertise.description }}
            </li>
          </ul>
        </section>

        <!-- Work Experience -->
        <section class="content-section">
          <h2 class="section-title">Work Experience</h2>
          <div 
            v-for="(experience, index) in portfolioData.experience" 
            :key="index"
            class="experience-item"
          >
            <div class="experience-header">
              <h3 class="job-title">{{ experience.position }}</h3>
              <h4 class="company-name">{{ experience.company }}</h4>
              <div class="job-meta">
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
        </section>

        <!-- Skills -->
        <section class="content-section">
          <h2 class="section-title">Skills</h2>
          <div class="skills-content">
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
        </section>

        <!-- Interests and Hobbies -->
        <section class="content-section">
          <h2 class="section-title">Interests and Hobbies</h2>
          <ul class="interests-list">
            <li>Cloud-Native Technologies and DevOps Practices</li>
            <li>Generative AI and Machine Learning Applications</li>
            <li>Open Source Contribution and Community Building</li>
            <li>Continuous Learning and Technology Innovation</li>
          </ul>
        </section>
      </main>
    </div>
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
