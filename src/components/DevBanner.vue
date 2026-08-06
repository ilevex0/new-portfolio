<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

const dismissBanner = () => {
  isVisible.value = false
}
</script>

<template>
  <div v-if="isVisible" class="dev-banner">
    <div class="banner-container">
      <div class="banner-content">
        <span class="banner-badge">NOTICE</span>
        <p class="banner-text">
          This page is still under development. The current text is just placeholder content and will be updated soon.
        </p>
      </div>
      <button class="banner-close" @click="dismissBanner" aria-label="Close banner">
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.dev-banner {
  background: rgba(56, 189, 248, 0.08);
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.banner-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.banner-badge {
  font-family: "Orbitron", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0b0f19;
  background: #38bdf8;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.banner-text {
  font-size: 13px;
  font-weight: 300;
  color: #cbd5e1;
  margin: 0;
  letter-spacing: 0.3px;
}

/* Botão de Fechar (X) */
.banner-close {
  background: transparent;
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.banner-close:hover {
  background: rgba(56, 189, 248, 0.15);
  border-color: #38bdf8;
}

.banner-close span {
  position: absolute;
  width: 12px;
  height: 2px;
  background: #38bdf8;
}

.banner-close span:nth-child(1) {
  transform: rotate(45deg);
}

.banner-close span:nth-child(2) {
  transform: rotate(-45deg);
}

/* Responsivo */
@media (max-width: 768px) {
  .dev-banner {
    padding: 10px 16px;
  }
  .banner-text {
    font-size: 12px;
  }
}
</style>