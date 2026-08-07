<script setup>
import { ref, onMounted } from 'vue'

const stackSection = ref(null)

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

  if (stackSection.value) {
    observer.observe(stackSection.value)
  }
})

const stackCategories = [
  {
    title: 'Websites & Web Apps',
    number: '01',
    description: 'Building fast, modern, and user-friendly digital platforms tailored for performance and scale.',
    skills: ['Vue.js', 'React', 'Node.js', 'HTML5 / CSS3', 'JavaScript (ES6+)']
  },
  {
    title: '3D Visuals & Animation',
    number: '02',
    description: 'Immersive visual elements and interactive 3D environments that bring life to digital spaces.',
    skills: ['Three.js', 'WebGL', 'Blender', 'Cinema 4D']
  },
  {
    title: 'Cinematic Editing & Video',
    number: '03',
    description: 'Professional post-production, motion graphics, and high-impact visual media editing.',
    skills: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Motion Design']
  },
  {
    title: 'AI & Smart Systems',
    number: '04',
    description: 'Implementing generative AI pipelines, intelligent models, and automated workflows.',
    skills: ['Python', 'PyTorch', 'LLMs / SLMs', 'Generative AI']
  }
]
</script>

<template>
  <section ref="stackSection" id="skills" class="stack-section is-visible">
    <div class="stack-container">
      
      <!-- Header Invertido -->
      <div class="stack-header animate-fade-down">
        <h2 class="main-title-large">WHAT I USE</h2>
        <span class="subtitle-small highlight-text">CAPABILITIES & EXPERTISE</span>
      </div>

      <!-- Grid de Stacks (Inalterado) -->
      <div class="stack-grid">
        <div 
          v-for="(category, index) in stackCategories" 
          :key="index"
          class="stack-card animate-fade-up" 
          :style="`--delay: ${0.1 * (index + 1)}s;`"
        >
          <div class="card-top">
            <span class="card-number text-main">{{ category.number }}</span>
            <h3 class="card-title">{{ category.title }}</h3>
          </div>
          
          <p class="card-desc">{{ category.description }}</p>

          <div class="skills-chips">
            <span 
              v-for="(skill, sIndex) in category.skills" 
              :key="sIndex" 
              class="skill-chip"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.stack-section {
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

.stack-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ==========================================
   Header Invertido (Ajustes de Hierarquia)
   ========================================== */
.stack-header {
  margin-bottom: 70px;
  text-align: left;
  display: flex;
  flex-direction: column-reverse; /* Coloca o subtítulo (pequeno) abaixo do título (grande) no HTML, mas inverte a ordem de leitura para o bot */
}

/* Novo Título Grande (Era badge-subtitle) */
.main-title-large {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(32px, 4vw, 50px); /* Tamanho grande e responsivo */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 2.5px;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 0 25px rgba(56, 189, 248, 0.6); /* Glow azulado forte */
}

/* Novo Subtítulo Pequeno (Era main-title) */
.subtitle-small {
  font-family: "Orbitron", sans-serif;
  font-size: 12px; /* Tamanho pequeno */
  font-weight: 500;
  letter-spacing: 4px; /* Espaçamento maior para manter o ar "tech" */
  text-transform: uppercase;
  display: block;
  margin-bottom: 15px; /* Espaçamento entre o pequeno e o grande */
}

.highlight-text {
  color: #38bdf8;
  /* Removi o text-shadow forte do subtítulo para focar no título principal */
}

/* ==========================================
   Grid de Stacks (Inalterado)
   ========================================== */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.stack-card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.stack-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #38bdf8, transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stack-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
}

.stack-card:hover::before {
  opacity: 1;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-number {
  font-family: "Orbitron", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #38bdf8;
}

.text-main {
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.7);
}

.card-title {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.5px;
}

.card-desc {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
}

/* Chips / Tags */
.skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.skill-chip {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #cbd5e1;
  background: rgba(56, 189, 248, 0.06);
  border: 1px solid rgba(56, 189, 248, 0.15);
  padding: 6px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.stack-card:hover .skill-chip {
  border-color: rgba(56, 189, 248, 0.3);
  background: rgba(56, 189, 248, 0.1);
  color: #ffffff;
}

/* ==========================================
    ANIMAÇÕES DE ENTRADA (FALLBACK SEGURO)
   ========================================== */
.stack-section .animate-fade-down,
.stack-section .animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.stack-section.is-visible .animate-fade-down,
.stack-section.is-visible .animate-fade-up {
  opacity: 1;
  transform: translate(0, 0);
}

/* Responsive */
@media (max-width: 768px) {
  .stack-section {
    padding: 80px 20px;
  }
  .stack-header {
    margin-bottom: 40px;
  }
  .main-title-large {
    font-size: 28px; /* Ajuste específico para mobile */
  }
}
</style>