<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      
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
  padding: 60px 60px 40px;
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
  gap: 50px;
}

/* Grade de Links */
.footer-grid-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
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

/* Responsivo */
@media (max-width: 768px) {
  .site-footer {
    padding: 50px 20px 30px;
  }
  .footer-grid-nav {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer-bottom-bar {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>