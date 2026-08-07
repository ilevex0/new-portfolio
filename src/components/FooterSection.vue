<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const email = ref('seu.email@exemplo.com')
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      
      <!-- Bloco Principal Centralizado -->
      <div class="footer-hero-center">
        <span class="subtitle-small highlight-text">AVAILABLE FOR HIRE & FREELANCE</span>
        <h2 class="footer-title">LET'S CREATE SOMETHING EXTRAORDINARY</h2>
        <p class="footer-desc">
          Have an AI project, web app, or video production in mind? Drop a message and let's turn complex challenges into clean, high-performance digital experiences.
        </p>

        <!-- Ações Centrais -->
        <div class="footer-actions-center">
          <button @click="copyEmail" class="btn-primary-action">
            <span>{{ copied ? 'Email Copied!' : 'Copy Email' }}</span>
            <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <a :href="'mailto:' + email" class="btn-secondary-action">
            <span>Send Direct Message</span>
          </a>
        </div>
      </div>

      <!-- Grade de Navegação e Contatos Secundários -->
      <div class="footer-grid-nav">
        <div class="footer-col">
          <span class="col-title">NAVIGATION</span>
          <a href="#projects" class="footer-link">Featured Projects</a>
          <a href="#about" class="footer-link">About Me</a>
          <a href="#skills" class="footer-link">Tech Stack</a>
        </div>

        <div class="footer-col">
          <span class="col-title">SOCIALS</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-link">Twitter</a>
        </div>

        <div class="footer-col">
          <span class="col-title">STATUS</span>
          <div class="status-badge">
            <span class="status-dot"></span>
            <span>Open for Opportunities</span>
          </div>
        </div>
      </div>

      <!-- Rodapé Inferior (Copyright e Marca) -->
      <div class="footer-bottom-bar">
        <span class="brand-logo">FAZER ARTS</span>
        <p class="footer-copy">&copy; {{ currentYear }} — Built with Vue.js & Precision.</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #070a12;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 100px 60px 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(56, 189, 248, 0.15);
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

/* Seção Hero Centralizada */
.footer-hero-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.subtitle-small {
  font-family: "Orbitron", sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.highlight-text {
  color: #38bdf8;
}

.footer-title {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.5px;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
  max-width: 800px;
}

.footer-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: #94a3b8;
  margin: 0;
  max-width: 600px;
}

.footer-actions-center {
  display: flex;
  gap: 14px;
  margin-top: 10px;
}

/* Grade de Links */
.footer-grid-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.col-title {
  font-family: "Orbitron", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #64748b;
}

.footer-link {
  font-size: 13px;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  width: fit-content;
}

.footer-link:hover {
  color: #38bdf8;
  transform: translateX(4px);
}

/* Indicador de Status */
.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #cbd5e1;
  background: rgba(56, 189, 248, 0.05);
  border: 1px solid rgba(56, 189, 248, 0.15);
  padding: 8px 14px;
  border-radius: 20px;
  width: fit-content;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #38bdf8;
  border-radius: 50%;
  box-shadow: 0 0 8px #38bdf8;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 12px #38bdf8; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

/* Barra Inferior */
.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.brand-logo {
  font-family: "Orbitron", sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
}

.footer-copy {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

/* Padrão de Botões */
.btn-primary-action,
.btn-secondary-action {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  height: 40px;
  box-sizing: border-box;
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

/* Responsivo */
@media (max-width: 768px) {
  .site-footer {
    padding: 60px 20px 30px;
  }
  .footer-grid-nav {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer-actions-center {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary-action,
  .btn-secondary-action {
    width: 100%;
    justify-content: center;
  }
  .footer-bottom-bar {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>