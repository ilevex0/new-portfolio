<template>
  <div>
    <!-- Overlay com transição suave -->
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="overlay" 
        @click="close"
      ></div>
    </Transition>

    <!-- Aba Lateral (Sidebar) -->
    <aside :class="['sidebar', { active: isOpen }]">
      <button @click="close" class="close-btn">&times;</button>
      
      <nav class="sidebar-nav">
        <a href="#" @click.prevent="selectSection('projects')" class="sideMenuText">WHO AM I</a>
        <a href="#" @click.prevent="selectSection('projects')" class="sideMenuText">WHAT CAN I DO FOR YOU</a>
        <a href="#" @click.prevent="selectSection('projects')" class="sideMenuText">LET'S WORK TOGETHER</a>
      </nav>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'navigate'])

const close = () => {
  emit('close')
}
const selectSection = (sectionId) => {
  emit('close') // Fecha o menu
  emit('navigate', sectionId) // Informa qual seção o usuário quer ir
}
</script>

<style scoped>
/* O link do menu com a classe específica */
.sidebar-nav a.sideMenuText {
  font-family: "Share Tech Mono", monospace;
  font-weight: 400;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

.sidebar-nav a.sideMenuText:hover {
  color: #38bdf8;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 998;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100vh;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 999;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.sidebar.active {
  transform: translateX(-350px);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.close-btn {
  align-self: flex-end;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
}

.sidebar-nav {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>