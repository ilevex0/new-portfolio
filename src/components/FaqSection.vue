<script setup>
import { ref, onMounted } from 'vue'

const faqSection = ref(null)

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

  if (faqSection.value) {
    observer.observe(faqSection.value)
  }
})

// Estado para controlar qual FAQ está aberta (null = todas fechadas)
const openIndex = ref(0) // Começa com a primeira aberta por padrão

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

// Lista de Perguntas Frequentes voltadas para conversão e clareza
const faqList = [
  {
    question: 'How does the workflow and communication work during a project?',
    answer: 'Communication is direct and straightforward, with no corporate bureaucracy. We align goals from day one, set clear milestones, and maintain regular updates through your preferred channels until the final delivery.'
  },
  {
    question: 'What types of projects do you usually take on?',
    answer: 'I handle a multidisciplinary spectrum ranging from high-performance web applications and 3D interactive environments to cinematic video post-production and AI-driven automated workflows.'
  },
  {
    question: 'How long does a typical project take to complete?',
    answer: 'Timelines vary depending on the scope and complexity. A landing page or video editing package can take a few days, while full-scale web platforms or immersive digital experiences require a more structured timeline.'
  },
  {
    question: 'Do you offer ongoing support after delivery?',
    answer: 'Yes! After your project goes live, I ensure everything runs smoothly and offer continuous maintenance options or future scaling enhancements as your needs grow.'
  }
]
</script>

<template>
  <section ref="faqSection" id="faq" class="faq-section is-visible">
    <div class="faq-container">
      
      <!-- Header da Seção (Seguindo o padrão amigável e invertido) -->
      <div class="faq-header animate-fade-down">
        <h2 class="main-title-large">GOT QUESTIONS?</h2>
        <span class="subtitle-small highlight-text">FREQUENTLY ASKED QUESTIONS</span>
      </div>

      <!-- Lista de FAQs (Acordeão) -->
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqList" 
          :key="index"
          class="faq-item animate-fade-up"
          :style="`--delay: ${0.1 * (index + 1)}s;`"
          :class="{ 'is-open': openIndex === index }"
          @click="toggleFaq(index)"
        >
          <div class="faq-question-row">
            <span class="faq-number text-main">0{{ index + 1 }}</span>
            <h3 class="faq-question">{{ item.question }}</h3>
            <div class="faq-icon">
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div class="faq-answer-wrapper">
            <p class="faq-answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faq-section {
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

.faq-container {
  max-width: 900px; /* Um pouco mais estreito para focar na leitura das perguntas */
  margin: 0 auto;
}

/* Header Invertido */
.faq-header {
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

/* Acordeão de FAQs */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 25px 30px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(56, 189, 248, 0.4);
}

.faq-item.is-open {
  background: rgba(56, 189, 248, 0.02);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.faq-question-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.faq-number {
  font-family: "Orbitron", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #38bdf8;
}

.text-main {
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.7);
}

.faq-question {
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  flex-grow: 1;
  letter-spacing: 0.5px;
}

/* Ícone de Mais / Menos animado */
.faq-icon {
  width: 16px;
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.faq-icon span {
  position: absolute;
  background: #38bdf8;
  transition: transform 0.3s ease;
}

/* Linha horizontal do mais */
.faq-icon span:nth-child(1) {
  width: 100%;
  height: 2px;
}

/* Linha vertical do mais (vira hífen quando aberto) */
.faq-icon span:nth-child(2) {
  width: 2px;
  height: 100%;
}

.faq-item.is-open .faq-icon span:nth-child(2) {
  transform: rotate(90deg);
  opacity: 0;
}

/* Wrapper da Resposta com transição fluida baseada em grid-template-rows */
.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-answer-wrapper > div,
.faq-answer {
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  color: #94a3b8;
  margin: 0;
}

.faq-item.is-open .faq-answer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(56, 189, 248, 0.15);
}

/* Animações */
.faq-section .animate-fade-down,
.faq-section .animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.faq-section.is-visible .animate-fade-down,
.faq-section.is-visible .animate-fade-up {
  opacity: 1;
  transform: translate(0, 0);
}

/* Responsive */
@media (max-width: 768px) {
  .faq-section {
    padding: 80px 20px;
  }
  .faq-header {
    margin-bottom: 40px;
  }
  .main-title-large {
    font-size: 28px;
  }
  .faq-question {
    font-size: 15px;
  }
}
</style>