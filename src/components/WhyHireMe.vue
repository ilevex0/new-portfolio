<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)

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

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

// Vantagens focadas em conversão, clareza e entrega de valor
const benefits = [
  {
    number: '01',
    title: 'Business-Driven Results',
    description: 'I don’t just write code or edit clips; I build digital experiences designed to boost your conversion rates, engagement, and brand value.'
  },
  {
    number: '02',
    title: 'End-to-End Execution',
    description: 'From high-performance web development and 3D visuals to cinematic post-production and AI automation—everything under one roof.'
  },
  {
    number: '03',
    title: 'Modern & Scalable Tech',
    description: 'Using cutting-edge frameworks and state-of-the-art tools to ensure your product is lightning-fast, secure, and ready to scale.'
  },
  {
    number: '04',
    title: 'Clear Communication & Agility',
    description: 'No friction, no corporate bureaucracy. Direct communication, clean pipelines, and punctual deliveries tailored to your deadlines.'
  }
]
</script>

<template>
  <section ref="sectionRef" id="why-hire-me" class="why-section is-visible">
    <div class="why-container">
      
      <div class="why-header animate-fade-down">
        <h2 class="main-title-large">WHY WORK WITH ME</h2>
        <span class="subtitle-small highlight-text">WHAT I BRING TO YOUR PROJECT</span>
      </div>

      <div class="why-grid">
        <div 
          v-for="(item, index) in benefits" 
          :key="index"
          class="why-card animate-fade-up" 
          :style="`--delay: ${0.1 * (index + 1)}s;`"
        >
          <div class="card-top">
            <span class="card-number text-main">{{ item.number }}</span>
            <h3 class="card-title">{{ item.title }}</h3>
          </div>
          
          <p class="card-desc">{{ item.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.why-section {
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

.why-container {
  max-width: 1280px;
  margin: 0 auto;
}

/* Header Invertido (Igual ao TechStack) */
.why-header {
  margin-bottom: 70px;
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

/* Grid de Cards */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.why-card {
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

.why-card::before {
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

.why-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(56, 189, 248, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
}

.why-card:hover::before {
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

/* Animações */
.why-section .animate-fade-down,
.why-section .animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.why-section.is-visible .animate-fade-down,
.why-section.is-visible .animate-fade-up {
  opacity: 1;
  transform: translate(0, 0);
}

/* Responsive */
@media (max-width: 768px) {
  .why-section {
    padding: 80px 20px;
  }
  .why-header {
    margin-bottom: 40px;
  }
  .main-title-large {
    font-size: 28px;
  }
}
</style>