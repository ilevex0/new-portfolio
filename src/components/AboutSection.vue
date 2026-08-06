<script setup>
import { ref, onMounted } from 'vue'

// Referência para a seção inteira
const aboutSection = ref(null)

onMounted(() => {
  const observerOptions = {
    root: null, // Usa a viewport
    rootMargin: '0px',
    threshold: 0.15 // Dispara quando 15% da seção estiver visível
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe que ativa as animações
        entry.target.classList.add('is-visible')
        // Para de observar depois que já apareceu (executa só na primeira vez)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})
</script>

<template>
  <section ref="aboutSection" id="about" class="about-section">
    <div class="about-container">
      
      <!-- Minimalist Header -->
      <div class="about-header animate-fade-down">
        <span class="badge-subtitle">Professional PROFILE</span>
        <h2 class="main-title">METHOD, ART & TECHNOLOGY</h2>
      </div>

      <!-- Asymmetric Grid -->
      <div class="about-grid">
        
        <!-- Left Column: Manifesto / Vision with Luminous Spine -->
        <div class="manifesto-col animate-fade-left">
          <div class="luminous-spine"></div>
          <div class="manifesto-content">
            <h3 class="manifesto-heading">
              Multidisciplinary creator forging the digital frontier at the intersection of code, design, and intelligence.
            </h3>
            <p class="manifesto-text">
              I merge aesthetic vision with advanced engineering, operating seamlessly across the entire digital spectrum. From architecting high-performance web applications to crafting cinematic 3D worlds and leveraging generative AI, I transform complex ideas into tangible, premium experiences.
            </p>
            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number text-main">+8</span>
                <span class="stat-label">Years of Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-main">100%</span>
                <span class="stat-label">Passion Driven</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-main">5+</span>
                <span class="stat-label">Core Skillsets</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Stylized Expertise List with Interactive Glow -->
        <div class="expertise-list">
          
          <div class="expertise-item animate-fade-right" style="--delay: 0.1s;">
            <div class="item-number text-main">01</div>
            <div class="item-content">
              <h4>Video & Image Editing</h4>
              <p>Premiere Pro, DaVinci Resolve. Delivering cinematic post-production and advanced visual grading.</p>
            </div>
          </div>

          <div class="expertise-item animate-fade-right" style="--delay: 0.2s;">
            <div class="item-number text-main">02</div>
            <div class="item-content">
              <h4>Motion Graphics & 3D</h4>
              <p>Cinema 4D, Blender, After Effects. Creating dynamic visual narratives and immersive environments.</p>
            </div>
          </div>

          <div class="expertise-item animate-fade-right" style="--delay: 0.3s;">
            <div class="item-number text-main">03</div>
            <div class="item-content">
              <h4>Artificial Intelligence</h4>
              <p>Generative AI tools and pipelines for rapid ideation, asset creation, and automated workflows.</p>
            </div>
          </div>

          <div class="expertise-item animate-fade-right" style="--delay: 0.4s;">
            <div class="item-number text-main">04</div>
            <div class="item-content">
              <h4>Web Development</h4>
              <p>React, Vue, Three.js, Node.js. Focused on high-performance architecture and seamless user interfaces.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: radial-gradient(circle at center, #161a26 0%, #0b0f19 100%);
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 140px 60px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(56, 189, 248, 0.1);
  overflow: hidden;
}

.about-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* Header */
.about-header {
  margin-bottom: 70px;
}

.badge-subtitle {
  font-family: "Orbitron", sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #38bdf8;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
  text-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
}

.main-title {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(28px, 3.8vw, 44px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0;
  color: #ffffff;
}

/* Asymmetric Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* Manifesto Column with Spine */
.manifesto-col {
  display: flex;
  gap: 30px;
  position: relative;
}

.luminous-spine {
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #38bdf8, transparent);
  opacity: 0.5;
}

.manifesto-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.manifesto-heading {
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
}

.manifesto-text {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
  color: #94a3b8;
  margin: 0;
}

.stats-row {
  display: flex;
  gap: 40px;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: "Orbitron", sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #38bdf8;
}

.text-main {
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.7);
}

.stat-label {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

/* Expertise List */
.expertise-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.expertise-item {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.expertise-item:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  transform: translateX(6px);
}

.item-number {
  font-family: "Orbitron", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #38bdf8;
  margin-top: 2px;
}

.item-content h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.item-content p {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
}

/* ==========================================
   ANIMAÇÕES DE ENTRADA (SCROLL REVEAL)
   ========================================== */

.about-section .animate-fade-down,
.about-section .animate-fade-left,
.about-section .animate-fade-right {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.about-section .animate-fade-down {
  transform: translateY(-30px);
}

.about-section .animate-fade-left {
  transform: translateX(-40px);
}

.about-section .animate-fade-right {
  transform: translateX(40px);
}

.about-section.is-visible .animate-fade-down,
.about-section.is-visible .animate-fade-left,
.about-section.is-visible .animate-fade-right {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}

/* Responsive */
@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .about-section {
    padding: 80px 20px;
  }
  .luminous-spine {
    display: none;
  }
}
</style>