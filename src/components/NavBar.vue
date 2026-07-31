<template>
  <div class="hero-container">
    <!-- 1. O Fundo -->
    <img src="@/assets/imgs/Placeholder.png" class="background-video" alt="">

    <nav class="navbar">
      <h3 class="titleOnTop">FAZER ARTS</h3>
      
      <!-- Adicionada a classe "menu-wrapper" para alinhar o ícone e o texto lado a lado -->
      <h3 class="menuTitle" @click="isMenuOpen = true">
        <span class="menu-wrapper">
          <img src="@/assets/imgs/menu-icon.svg" class="menu-icon" alt="Menu"> 
          MENU
        </span>
      </h3>
    </nav>

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
const isTransitioning = ref(false)

const handleNavigation = (sectionId) => {
  isTransitioning.value = true

  setTimeout(() => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }

    setTimeout(() => {
      isTransitioning.value = false
    }, 500)

  }, 1000)
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

.titleOnTop:hover {
  opacity: 0.85;
  transform: translateX(-50%) scale(1.03);
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
  white-space: nowrap;
}

/* Garante que o ícone e o texto fiquem perfeitamente alinhados e lado a lado */
.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-icon {
  width: 20px;
  height: auto;
  display: block;
}

.menuTitle:hover {
  opacity: 0.7;
}
</style>