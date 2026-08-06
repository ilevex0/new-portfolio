<template>
    <div>
        <!-- Overlay com transição suave -->
        <Transition name="fade">
            <div v-if="isOpen" class="overlay" @click="close"></div>
        </Transition>

        <!-- Aba Lateral (Sidebar) -->
        <aside :class="['sidebar', { active: isOpen }]">
            <button @click="close" class="close-btn">&times;</button>

            <nav class="sidebar-nav">
                <a href="#" @click.prevent="selectSection('about')" class="sideMenuText">WHO AM I</a>
                <a href="#" @click.prevent="selectSection('services')" class="sideMenuText">WHAT CAN I DO FOR YOU</a>
                <a href="#" @click.prevent="selectSection('contact')" class="sideMenuText">LET'S WORK TOGETHER</a>
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
/* O link do menu ajustado para Montserrat e cores refinadas */
.sidebar-nav a.sideMenuText {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-block;
}

.sidebar-nav a.sideMenuText:hover {
    color: #38bdf8;
    transform: translateX(6px);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(11, 15, 25, 0.6);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
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
    right: -380px;
    width: 380px;
    height: 100vh;
    background: rgba(11, 15, 25, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.sidebar.active {
    transform: translateX(-380px);
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.7);
}

.close-btn {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #ffffff;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.close-btn:hover {
    background: rgba(56, 189, 248, 0.15);
    border-color: rgba(56, 189, 248, 0.4);
    color: #38bdf8;
    transform: scale(1.05);
}

.sidebar-nav {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>