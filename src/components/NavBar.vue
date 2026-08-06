<template>
  <div class="hero-container">
    <!-- O Fundo 1: Base Video (Fica sempre rodando no fundo) -->
    <video 
      src="@/assets/videos/hero.mp4" 
      class="background-video" 
      autoplay 
      muted 
      loop 
      playsinline
      disablepictureinpicture
      controlslist="nodownload nofullscreen noremoteplayback"
    ></video>

    <!-- O Fundo 2: Workbench Video (Fica por cima, invisível, e aparece no hover) -->
    <video 
      src="@/assets/videos/workbench.mp4" 
      class="background-video workbench-video" 
      autoplay 
      muted 
      loop 
      playsinline
      disablepictureinpicture
      controlslist="nodownload nofullscreen noremoteplayback"
    ></video>
    
    <!-- Camada de Escurecimento Inteligente -->
    <div class="hero-overlay"></div>

    <!-- Navbar Minimalista de Luxo -->
    <header class="luxury-navbar">
      
      <!-- Coluna Esquerda: Indicador de Status (Desktop) / Logo (Mobile) -->
      <div class="nav-side left">
        <div class="status-badge desktop-only">
          <span class="pulse-dot"></span>
          <span class="status-text">AVAILABLE FOR PROJECTS</span>
        </div>
        
        <!-- Logo exclusivo para mobile -->
        <div class="nav-center mobile-only" @click="handleNavigation('hero')">
          <h1 class="brand-title">FAZER ARTS</h1>
        </div>
      </div>

      <!-- Coluna Central: O Logo (Apenas Desktop) -->
      <div class="nav-center-wrapper desktop-only">
        <div class="nav-center" @click="handleNavigation('hero')">
          <h1 class="brand-title">FAZER ARTS</h1>
        </div>
      </div>

      <!-- Coluna Direita: Menu Interativo -->
      <div class="nav-side right">
        <div class="menu-container" @click="isMenuOpen = true">
          <span class="nav-label">MENU</span>
          <div class="menu-trigger">
            <span class="line"></span>
            <span class="line short"></span>
          </div>
        </div>
      </div>

    </header>

    <!-- Conteúdo Principal do Hero (Mais limpo e direto) -->
    <div class="hero-content">
      <div class="hero-badge-wrapper">
        <span class="hero-subtitle-tag">IMMERSIVE 3D & VISUAL DESIGN</span>
      </div>
      
      <h2 class="hero-headline">
        CRAFTING DIGITAL <span class="highlight-text">WORLDS</span> & EXPERIENCES
      </h2>

      <div class="hero-actions">
        <!-- O botão volta a ser simples, sem eventos de mouse do Vue -->
        <button class="primary-btn" @click="handleNavigation('projects')">
          <span>EXPLORE WORKS</span>
          <svg class="btn-arrow" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>

    <SideMenu 
      :is-open="isMenuOpen" 
      @close="isMenuOpen = false" 
      @navigate="handleNavigation" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideMenu from './SideMenu.vue'

const isMenuOpen = ref(false)

const handleNavigation = (sectionId) => {
  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #0b0f19;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transform: scale(1.01);
  pointer-events: none;
}

/* Estado inicial do vídeo workbench */
.workbench-video {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 2; /* Fica logo acima do vídeo base */
}

/* O "Pulo do Gato" em CSS Puro */
/* Apenas aplica o efeito em dispositivos que têm mouse (ignora mobile/touch) */
@media (hover: hover) and (pointer: fine) {
  /* Se dentro do hero-container existir um botão .primary-btn com :hover, aplique isso no .workbench-video */
  .hero-container:has(.primary-btn:hover) .workbench-video {
    opacity: 1;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3; /* Aumentado para ficar acima dos dois vídeos */
  background: rgba(7, 10, 18, 0.45);
  pointer-events: none;
}

/* Estrutura Principal da Navbar */
.luxury-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  z-index: 10;
  
  background: linear-gradient(
    180deg, 
    rgba(8, 11, 18, 0.85) 0%, 
    rgba(8, 11, 18, 0.4) 60%, 
    rgba(8, 11, 18, 0) 100%
  );
}

.nav-side {
  display: flex;
  align-items: center;
  user-select: none;
}

.nav-side.left {
  justify-content: flex-start;
}

.nav-side.right {
  justify-content: flex-end;
}

.mobile-only {
  display: none !important;
}

.desktop-only {
  display: flex !important;
}

.menu-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  width: fit-content;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: rgba(56, 189, 248, 0.05);
  border: 1px solid rgba(56, 189, 248, 0.15);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.status-badge:hover {
  background: rgba(56, 189, 248, 0.1);
  border-color: rgba(56, 189, 248, 0.3);
}

.pulse-dot {
  width: 7px;
  height: 7px;
  background-color: #38bdf8;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(56, 189, 248, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
  }
}

.status-text {
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #38bdf8;
  text-transform: uppercase;
}

.nav-center-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-center {
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
}

.brand-title {
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  color: #ffffff;
  margin: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.brand-title:hover {
  color: #38bdf8;
  letter-spacing: 5.5px;
}

.nav-label {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  transition: color 0.3s ease;
}

.menu-trigger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 20px;
}

.menu-trigger .line {
  display: block;
  height: 1px;
  background-color: #ffffff;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-trigger .line.short {
  width: 60%;
}

.menu-container:hover .line {
  width: 100%;
  background-color: #38bdf8;
}

.menu-container:hover .nav-label {
  color: #38bdf8;
}

/* =========================================
   ESTILOS DO CONTEÚDO DO HERO (Minimalista)
   ========================================= */
.hero-content {
  position: relative;
  z-index: 5;
  max-width: 850px;
  padding: 0 30px;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-subtitle-tag {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #38bdf8;
  text-transform: uppercase;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 6px 16px;
  border-radius: 30px;
  display: inline-block;
  margin-bottom: 20px;
}

.hero-headline {
  font-family: "Orbitron", sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 30px 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.highlight-text {
  color: #38bdf8;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.primary-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #38bdf8;
  color: #0b0f19;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 14px 32px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
}

.primary-btn:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.primary-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .luxury-navbar {
    padding: 0 20px;
    height: 75px;
    grid-template-columns: 1fr auto;
  }

  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: flex !important;
  }

  .brand-title {
    font-size: 16px;
    letter-spacing: 2.5px;
  }

  .nav-label {
    font-size: 11px;
    letter-spacing: 1.5px;
  }

  .hero-headline {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .hero-actions {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /* O botão mantém um tamanho controlado e só vira 100% em telas menores que 480px */
  .primary-btn {
    width: auto;
    min-width: 220px;
    justify-content: center;
  }
}

/* Ajuste dedicado para telas de smartphones bem estreitos */
@media (max-width: 480px) {
  .hero-actions {
    padding: 0 20px;
    box-sizing: border-box;
  }

  .primary-btn {
    width: 100%;
  }
}
/* Quebra intermediária para telas entre 769px e 1024px */
@media (max-width: 1024px) {
  .luxury-navbar {
    padding: 0 30px;
  }

  /* Oculta o status badge para liberar espaço lateral */
  .status-badge {
    display: none !important;
  }
}
</style>