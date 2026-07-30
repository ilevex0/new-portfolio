<template>
  <div class="hero-container">
    <!-- 1. O Vídeo de Fundo -->
    <img src="@/assets/imgs/Placeholder.png" class="background-video" alt="">

    <nav class="navbar">
      <h3 class="titleOnTop">FAZER ARTS</h3>
      <h3 class="menuTitle" @click="isMenuOpen = true">MENU</h3>
    </nav>

    <SideMenu 
    :is-open="isMenuOpen" 
    @close="isMenuOpen = false" 
    @navigate="handleNavigation" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideMenu from './SideMenu.vue'

const isMenuOpen = ref(false)
const isTransitioning = ref(false) // Controla a animação de partículas

const handleNavigation = (sectionId) => {
  // 1. O menu já fechou (graças ao emit 'close')
  
  // 2. Ativa o efeito de partículas subindo na tela
  isTransitioning.value = true

  setTimeout(() => {
    // Encontra a seção na página e rola até ela
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }

    // 5. Desliga o efeito de partículas após a transição terminar
    setTimeout(() => {
      isTransitioning.value = false
    }, 500)

  }, 1000) // 1 segundo de espera
}
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  z-index: 10;
  
  background-color: rgba(0, 0, 0, 0.075);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.titleOnTop {
  font-family: "Orbitron", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menuTitle {
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  position: absolute;
  right: 80px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.menuTitle:hover {
  opacity: 0.7;
}
.titleOnTop:hover {
  opacity: 0.85;
  transform: translateX(-50%) scale(1.03);
}
</style>