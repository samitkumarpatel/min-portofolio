<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title font-display">
            <span class="title-line">Samit Kumar Patel</span>
            <span class="title-subtitle font-caption">Lead Engineer | DevOps | Cloud-Native</span>
          </h1>
          <p class="hero-description font-body">
            Full-Stack Programmer specializing in Java, Go, Python, React, Vue with over 15+ years of
            experience in IT infrastructure and software engineering.
          </p>
          <div class="hero-location">
            <span class="location-icon">📍</span>
            Copenhagen, Capital Region of Denmark, Denmark
          </div>
          <div class="hero-actions">
            <button class="btn-primary" @click="scrollToSection('contact')">Get In Touch</button>
            <button class="btn-secondary" @click="scrollToSection('about')">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-image">
              <img
                src="https://avatars.githubusercontent.com/samitkumarpatel"
                alt="Samit Kumar Patel"
              />
            </div>
            <div class="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <AnimatedSection section-id="about" title="About Me">
      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            With over 15+ years in IT, I specialize in DevOps Engineering, Cloud-Native Platforms,
            and Full-Stack Development across domains like Transportation & Logistics, Master Data
            Management (MDM), and Finance. My work bridges the gap between infrastructure and
            software engineering, enabling scalable, secure, and automated solutions.
          </p>
          <p class="about-description">
            Day-to-day, I focus on infrastructure automation, CI/CD pipelines, and Site Reliability
            Engineering (SRE) while also developing full-stack applications using Java, Go, Python,
            and modern JavaScript frameworks (React, Vue). I'm passionate about Platform
            Engineering, creating self-service tooling that empowers developers and accelerates
            delivery.
          </p>
          <p class="about-description">
            Utilizing Generative AI (GenAI) capabilities to optimize DevOps workflows, automate
            infrastructure provisioning, and build intelligent agent-based solutions that enhance
            productivity and efficiency across the software development lifecycle.
          </p>
        </div>
        <div class="expertise-grid">
          <Card3D v-for="expertise in expertiseAreas" :key="expertise.title">
            <div class="expertise-icon">{{ expertise.icon }}</div>
            <h3>{{ expertise.title }}</h3>
            <p>{{ expertise.description }}</p>
          </Card3D>
        </div>
      </div>
    </AnimatedSection>

    <!-- Experience Section -->
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title font-display">Experience</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(job, index) in experience" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="job-header">
                <h3 class="job-title font-heading">{{ job.title }}</h3>
                <h4 class="company-name font-body">{{ job.company }}</h4>
                <div class="job-meta">
                  <span class="job-location">{{ job.location }}</span>
                  <span class="job-duration">{{ job.duration }}</span>
                </div>
              </div>
              <ul class="job-responsibilities">
                <li v-for="responsibility in job.responsibilities" :key="responsibility">
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <AnimatedSection section-id="skills" title="Skills & Technologies">
      <div class="skills-grid">
        <Card3D v-for="category in skillCategories" :key="category.name">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skill-tags">
            <span
              class="skill-tag"
              v-for="skill in category.skills"
              :key="skill"
              :style="{ '--delay': Math.random() * 0.5 + 's' }"
            >
              {{ skill }}
            </span>
          </div>
        </Card3D>
      </div>
    </AnimatedSection>

    <!-- Contact Section -->
    <AnimatedSection section-id="contact" title="Get In Touch">
      <div class="contact-content">
        <div class="contact-info">
          <Card3D v-for="contact in contactInfo" :key="contact.type">
            <div class="contact-icon">{{ contact.icon }}</div>
            <div class="contact-details">
              <h4>{{ contact.type }}</h4>
              <a :href="contact.href" :target="contact.target || '_self'">
                {{ contact.value }}
              </a>
            </div>
          </Card3D>
        </div>
        <div class="contact-form">
          <div class="contact-message">
            <h3 class="font-heading">Let's Connect</h3>
            <p class="font-body">
              I'm always interested in discussing new opportunities, innovative projects, and
              collaboration possibilities. Feel free to reach out through any of the contact methods
              listed on the left.
            </p>
            <div class="contact-cta">
              <a href="mailto:samitkumarpatel@live.com" class="btn-primary"> Send Email </a>
              <a
                href="https://www.linkedin.com/in/samitkumarpatel"
                target="_blank"
                class="btn-secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</template>

<script setup lang="ts">
import AnimatedSection from '@/components/AnimatedSection.vue'
import Card3D from '@/components/Card3D.vue'

const contactInfo = [
  {
    type: 'Phone',
    icon: '📞',
    href: 'tel:+4571610257',
    value: '+45 71610257',
  },
  {
    type: 'Email',
    icon: '✉️',
    href: 'mailto:samitkumarpatel@live.com',
    value: 'samitkumarpatel@live.com',
  },
  {
    type: 'LinkedIn',
    icon: '💼',
    href: 'https://www.linkedin.com/in/samitkumarpatel',
    value: 'linkedin.com/in/samitkumarpatel',
    target: '_blank',
  },
]

const expertiseAreas = [
  {
    icon: '🏗️',
    title: 'Infrastructure as Code (IaC)',
    description:
      'Expert in designing and provisioning infrastructure using tools like Terraform and Pulumi.',
  },
  {
    icon: '🔄',
    title: 'CI/CD Pipeline as Code',
    description:
      'Building and managing pipelines with Jenkins, Azure DevOps, GitHub Actions, and Argo CD.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native Technologies',
    description:
      'Proficient with Docker, Kubernetes, and Serverless platforms for efficient application delivery.',
  },
  {
    icon: '💻',
    title: 'Full-Stack Development',
    description:
      'Design, develop, build and deploy monolith, modulith, and microservices using Java, Python, Go, and Node.js. Frontend deployment to CDN.',
  },
  {
    icon: '🤖',
    title: 'Agentic Workflows with GenAI',
    description:
      'Designing intelligent agents and workflows that automate infrastructure provisioning and streamline DevOps tasks.',
  },
]

const experience = [
  {
    title: 'Lead Engineer',
    company: 'A.P. Moller - Maersk',
    location: 'Copenhagen, Denmark',
    duration: 'February 2022 - Present',
    responsibilities: [
      'Leveraging Generative AI–powered development tooling to boost productivity, accelerate solution design, and enable automation for higher efficiency and faster delivery.',
      'Azure Infrastructure as Code using Terraform',
      'CI/CD pipeline development with GitHub Actions and Argo CD',
      'AKS (Azure Kubernetes Service) Cluster Management',
      'Temporal for workflow and service composition',
      'Apigee API Gateway management',
      'OAS (OpenAPI Specification) design for APIs',
      'Microservices development with Spring WebFlux, Spring MVC, and Spring Data',
      'Event-driven architecture with Kafka',
      'Microfrontend development using Vue.js and React.js',
      'PostgreSQL and CosmosDB for MongoDB',
      'Secrets management using HashiCorp Vault',
      'SRE tooling with LGTM stack',
    ],
  },
  {
    title: 'Senior IT Platform Engineer',
    company: 'Danske Bank',
    location: 'København, Denmark',
    duration: 'February 2021 - February 2022',
    responsibilities: [
      'DevSecOps advisory on SDLC practices',
      'Advisory on Cloud-Native and GitOps practices',
      'Contributed to and developed Terraform modules for private cloud',
      'Infrastructure as Code with Terraform for private and AWS cloud',
      'Enabled centralized CI/CD pipelines for Azure DevOps and ArgoCD',
      'Developed microservices for an in-house self-service portal',
      'Administered container orchestration using Docker, Docker Compose, Kubernetes, and OpenShift',
    ],
  },
  {
    title: 'Lead Engineer - DevOps',
    company: 'A.P. Moller - Maersk',
    location: 'Copenhagen, Denmark',
    duration: 'July 2019 - February 2021',
    responsibilities: [
      'Designed and developed in-house tooling infrastructure with Ansible',
      'Created Jenkins shared pipelines as code using Groovy',
      'Managed Ansible Tower for automation',
      'Provisioned Azure infrastructure using Terraform',
      'Provided platform and tooling support and administration',
      'Administered Azure DevOps',
      'Kubernetes (K8s) administration on IBM Cloud',
      'Managed and maintained a centralized library written on go, shell script, python and etc.',
      'Managed, maintained, and automated in-house tools including Atlassian products (Jira, Confluence, Bitbucket), SonarQube, HashiCorp Vault, Jenkins, and Hudson',
    ],
  },
  {
    title: 'System Analyst',
    company: 'UST',
    location: 'Copenhagen, Denmark / London, UK / Kerala, India',
    duration: 'July 2013 - August 2018',
    responsibilities: [
      'Full-stack development in Java, HTML, CSS, and SOA middleware (ESB, OSB) technologies.',
      'Managed CI/CD automation on Jenkins and Hudson.',
      'Collaborated on requirements analysis, system design, and production bug fixing.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Architectural Design Bureau',
    location: 'Orissa and Hyderabad, India',
    duration: 'December 2004 - March 2013',
    responsibilities: [
      'Analyzed requirements, developed design documents, and wrote system code.',
      'Verified system stability, scalability, and security for Java-based applications.',
      'Provided technical guidance and oversight to junior engineers.',
      'Developing Desktop application in Vb.net, Foxpro, C++, html, Javascript',
    ],
  },
]

const skillCategories = [
  {
    name: 'GenAI Platforms & APIs',
    skills: ['OpenAI', 'Azure OpenAI', 'Ollama', 'Google adk', 'Spring AI', 'langChain'],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    name: 'Programming Languages',
    skills: ['Java', 'Golang', 'Python', 'JavaScript', 'Groovy'],
  },
  {
    name: 'Backend Frameworks',
    skills: [
      'Spring Boot (MVC, WebFlux, Data, Security)',
      'Play Framework',
      'Node.js',
      'Express.js',
    ],
  },
  {
    name: 'Frontend Frameworks',
    skills: ['Vue.js', 'React.js', 'Angular.js'],
  },
  {
    name: 'Infrastructure as Code',
    skills: ['Terraform', 'Pulumi'],
  },
  {
    name: 'CI/CD Pipeline as Code',
    skills: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'ArgoCD'],
  },
  {
    name: 'Configuration Management',
    skills: ['Ansible', 'Ansible Tower'],
  },
  {
    name: 'Containerization',
    skills: ['Docker', 'Docker Compose', 'Docker Swarm', 'Kubernetes'],
  },
  {
    name: 'Observability',
    skills: [
      'LGTM (Loki, Grafana, Tempo & Mimir)',
      'EFK (Elastic, Fluentd, Kibana)',
      'ELK (Elastic, Logstash, Kibana)',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Oracle', 'MySQL', 'Cassandra', 'MongoDB', 'CosmosDB'],
  },
  {
    name: 'Pub/Sub',
    skills: ['Kafka', 'RabbitMQ'],
  },
  {
    name: 'Caching',
    skills: ['Redis Cache'],
  },
  {
    name: 'Other',
    skills: ['Temporal', 'Spring Cloud Gateway', 'Kong', 'Apigee', 'Azure CDN', 'Akamai'],
  },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.portfolio {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  background: linear-gradient(135deg, var(--text-primary), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-subtitle {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--primary-color);
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #00d4ff;
  border: 2px solid #00d4ff;
}

.btn-secondary:hover {
  background: #00d4ff;
  color: #ffffff;
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  position: relative;
  width: 300px;
  height: 300px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #00d4ff;
  position: relative;
  z-index: 2;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00d4ff, #0099cc, #00d4ff);
  opacity: 0.3;
  animation: rotate 4s linear infinite;
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.expertise-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.expertise-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  position: relative;
}

.expertise-card h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border-radius: 1px;
  opacity: 0.6;
}

.expertise-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Experience Section */
.experience {
  padding: 8rem 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-color), var(--primary-dark));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: auto;
  margin-left: 0;
  text-align: left;
  padding-right: 3rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
  margin-right: 0;
  text-align: left;
  padding-left: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #00d4ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border: 4px solid #0a0a0a;
}

.timeline-content {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  width: 45%;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 10px 30px var(--shadow-primary);
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.company-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.job-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.job-responsibilities {
  list-style: none;
  padding: 0;
}

.job-responsibilities li {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
}

.job-responsibilities li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: 50%;
  box-shadow: 0 0 8px var(--shadow-glow);
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--pill-bg, var(--background-light));
  color: var(--pill-text, var(--primary-color));
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--pill-border, var(--border-hover));
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
}

.skill-tag:hover {
  background: var(--primary-color);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px var(--shadow-glow);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 50%;
  margin-bottom: 1rem;
}

.contact-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.contact-details a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--primary-color);
}

.contact-form {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.contact-message h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.contact-message p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-cta .btn-primary,
.contact-cta .btn-secondary {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 3rem;
    margin-right: 0;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    width: calc(100% - 3rem);
  }

  .timeline-marker {
    left: 20px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
