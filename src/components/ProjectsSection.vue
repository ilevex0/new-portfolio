<script setup>
import { ref, computed, onMounted } from 'vue'

const projectsSection = ref(null)

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (projectsSection.value) {
    observer.observe(projectsSection.value)
  }
})

// Categoria selecionada ('All' mostra tudo)
const selectedCategory = ref('All')

// Categorias disponíveis para os botões de filtro
const categories = ['All', 'AI & Machine Learning', 'Web Development & 3D', 'Video Editing']

// Lista completa de projetos
const projectsList = [
  {
    title: 'Rocket League Reinforcement Bot',
    category: 'AI & Machine Learning',
    description: 'An autonomous AI agent trained using PyTorch and PPO algorithms via RLGym to play Rocket League competitively.',
    tags: ['Python', 'PyTorch', 'RLGym', 'PPO'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Interactive 3D Product Viewer',
    category: 'Web Development & 3D',
    description: 'Immersive web application built with Three.js allowing users to inspect, rotate, and customize 3D models in real time.',
    tags: ['Vue.js', 'Three.js', 'WebGL', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Cinematic Showreel & Post-Production',
    category: 'Video Editing',
    description: 'High-impact commercial video editing and motion graphics assembly highlighting professional grading and visual effects.',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    liveUrl: '#',
    githubUrl: '#'
  }
]

// Projetos filtrados com base na categoria escolhida
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projectsList
  }
  return projectsList.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <section ref="projectsSection" id="projects" class="projects-section is-visible">
    <div class="projects-container">
      
      <!-- Header da Seção -->
      <div class="projects-header animate-fade-down">
        <h2 class="main-title-large">FEATURED WORK</h2>
        <span class="subtitle-small highlight-text">SOME OF MY RECENT PROJECTS</span>
      </div>

      <!-- Barra de Filtros por Categoria -->
      <div class="filter-bar animate-fade-down" style="--delay: 0.1s;">
        <button 
          v-for="(cat, index) in categories" 
          :key="index"
          class="filter-btn"
          :class="{ 'active': selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid de Projetos -->
      <div class="projects-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.title"
          class="project-card animate-fade-up"
          :style="`--delay: ${0.1 * (index + 1)}s;`"
        >
          <!-- Thumbnail / Preview Area -->
          <div class="project-image-wrapper">
            <div class="project-image-placeholder">
              <span class="placeholder-text">PROJECT PREVIEW</span>
            </div>
            <span class="project-category-badge">{{ project.category }}</span>
          </div>

          <!-- Conteúdo do Card -->
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>

            <!-- Tags de Tecnologias -->
            <div class="project-tags">
              <span 
                v-for="(tag, tIndex) in project.tags" 
                :key="tIndex"
                class="project-tag"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Botões de Ação -->
            <div class="project-actions">
              <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary-action">
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: #0b0f19;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 120px 60px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(56, 189, 248, 0.1);
  overflow: hidden;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* Header Invertido */
.projects-header {
  margin-bottom: 40px;
  text-align: left;
  display: flex;
  flex-direction: column-reverse;
}

.main-title-large {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 2.5px;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 0 25px rgba(56, 189, 248, 0.6);
}

.subtitle-small {
  font-family: "Orbitron", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 15px;
}

.highlight-text {
  color: #38bdf8;
}

/* Barra de Filtros */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
}

.filter-btn {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.filter-btn:hover {
  background: rgba(56, 189, 248, 0.05);
  border-color: rgba(56, 189, 248, 0.3);
  color: #ffffff;
}

.filter-btn.active {
  background: rgba(56, 189, 248, 0.12);
  border-color: #38bdf8;
  color: #38bdf8;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
}

/* Grid de Projetos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #38bdf8, transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
}

.project-card:hover::before {
  opacity: 1;
}

/* Área da Imagem / Thumbnail */
.project-image-wrapper {
  width: 100%;
  height: 200px;
  background: #05070d;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
  transition: transform 0.5s ease;
}

.project-card:hover .project-image-placeholder {
  transform: scale(1.05);
}

.placeholder-text {
  font-family: "Orbitron", sans-serif;
  font-size: 11px;
  letter-spacing: 3px;
  color: #475569;
}

.project-category-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(11, 15, 25, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.3);
  font-family: "Orbitron", sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: #38bdf8;
  padding: 5px 10px;
  border-radius: 20px;
  letter-spacing: 1px;
  backdrop-filter: blur(4px);
}

/* Conteúdo */
.project-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
}

.project-title {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.5px;
}

.project-desc {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
  flex-grow: 1;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
}

.project-tag {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #cbd5e1;
  background: rgba(56, 189, 248, 0.06);
  border: 1px solid rgba(56, 189, 248, 0.15);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

/* Ações (Botões) */
.project-actions {
  display: flex;
  gap: 12px;
  margin-top: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.btn-primary-action,
.btn-secondary-action {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.btn-primary-action {
  background: #38bdf8;
  color: #0b0f19;
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
}

.btn-primary-action:hover {
  background: #7dd3fc;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  transform: translateY(-2px);
}

.btn-secondary-action {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.btn-secondary-action:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(56, 189, 248, 0.3);
  transform: translateY(-2px);
}

/* Animações */
.projects-section .animate-fade-down,
.projects-section .animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.projects-section.is-visible .animate-fade-down,
.projects-section.is-visible .animate-fade-up {
  opacity: 1;
  transform: translate(0, 0);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-section {
    padding: 80px 20px;
  }
  .projects-header {
    margin-bottom: 30px;
  }
  .main-title-large {
    font-size: 28px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>