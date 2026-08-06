<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ctaSection = ref(null)
const canvasRef = ref(null)
const videoRef = ref(null)
let animationFrameId = null

onMounted(() => {
  // 1. Configuração do Observer para a animação da seção
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (ctaSection.value) {
    observer.observe(ctaSection.value)
  }

  // 2. Lógica de renderização do vídeo no Canvas
  const canvas = canvasRef.value
  const video = videoRef.value
  
  if (canvas && video) {
    const ctx = canvas.getContext('2d')

    // Ajusta o tamanho interno do canvas para acompanhar a tela
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Loop de desenho contínuo (requestAnimationFrame)
    const renderFrame = () => {
      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        // Limpa o canvas e desenha o frame atual do vídeo cobrindo o espaço (cover)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const hRatio = canvas.width / video.videoWidth
        const vRatio = canvas.height / video.videoHeight
        const ratio = Math.max(hRatio, vRatio)
        
        const centerShiftX = (canvas.width - video.videoWidth * ratio) / 2
        const centerShiftY = (canvas.height - video.videoHeight * ratio) / 2
        
        ctx.drawImage(
          video, 
          0, 0, video.videoWidth, video.videoHeight, 
          centerShiftX, centerShiftY, video.videoWidth * ratio, video.videoHeight * ratio
        )
      }
      animationFrameId = requestAnimationFrame(renderFrame)
    }

    video.play().catch(() => {
      // Caso o autoplay seja bloqueado por políticas do navegador
      console.log('Autoplay prevenido pelo navegador')
    })
    
    renderFrame()
  }
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

const handleAction = (type) => {
  if (type === 'hire') {
    console.log('Ação de Recrutamento / Contratação')
  } else if (type === 'message') {
    window.location.href = 'mailto:seu-email@exemplo.com'
  }
}
</script>

<template>
  <section ref="ctaSection" id="contact" class="final-cta-section">
    <!-- Vídeo oculto (fonte geradora) -->
    <video 
      ref="videoRef" 
      src="../assets/videos/hero.mp4" 
      autoplay 
      muted 
      loop 
      playsinline 
      crossorigin="anonymous"
      style="display: none;"
    ></video>

    <!-- Fundo renderizado no Canvas -->
    <div class="video-background">
      <canvas ref="canvasRef" class="bg-canvas"></canvas>
      <!-- Camada escura com gradiente sob controle total do CSS -->
      <div class="video-overlay"></div>
    </div>

    <div class="cta-glow"></div>

    <div class="cta-container">
      <div class="cta-badge-wrapper animate-fade-up" style="--delay: 0.1s;">
        <span class="cta-subtitle-tag">LET'S BUILD SOMETHING AMAZING</span>
      </div>

      <h2 class="cta-headline animate-fade-up" style="--delay: 0.2s;">
        READY TO BRING YOUR <span class="highlight-text">VISION</span> TO LIFE?
      </h2>

      <p class="cta-description animate-fade-up" style="--delay: 0.3s;">
        Whether you're a recruiter looking for a skilled developer/3D artist to join your team, 
        or a client with a freelance project in mind, my inbox is open.
      </p>

      <!-- Botões de Ação Final -->
      <div class="cta-actions animate-fade-up" style="--delay: 0.4s;">
        <button class="primary-btn" @click="handleAction('hire')">
          <span>HIRE ME (RESUME / JOBS)</span>
          <svg class="btn-arrow" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <button class="secondary-btn" @click="handleAction('message')">
          <span>CONTACT ME (FREELANCE)</span>
        </button>
      </div>

      <!-- Links rápidos opcionais -->
      <div class="cta-footer-links animate-fade-up" style="--delay: 0.5s;">
        <a href="mailto:seu-email@exemplo.com" class="direct-link">EMAIL ME DIRECTLY</a>
        <span class="separator">•</span>
        <a href="https://linkedin.com" target="_blank" class="direct-link">LINKEDIN</a>
        <span class="separator">•</span>
        <a href="https://github.com" target="_blank" class="direct-link">GITHUB</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

/* ==========================================
   ESTILOS DO CANVAS DE FUNDO
   ========================================== */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.bg-canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
}

/* Overlay escuro controlado perfeitamente pelo CSS, sem interferência do Opera */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.95) 100%);
  z-index: 1;
  pointer-events: none;
}

/* Efeito de luz ambiente de fundo com pulsação */
.cta-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(11, 15, 25, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  animation: pulse-glow 6s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 1;
  }
}

.cta-container {
  position: relative;
  z-index: 3;
  max-width: 800px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-subtitle-tag {
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

.cta-headline {
  font-family: "Orbitron", sans-serif;
  font-size: 38px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: 2px;
  margin: 0 0 20px 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.highlight-text {
  color: #38bdf8;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.cta-description {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 40px auto;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
  padding: 14px 28px;
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

.secondary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 14px 28px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
}

.secondary-btn:hover {
  background: rgba(255, 255, 2D, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.cta-footer-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.direct-link {
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.direct-link:hover {
  color: #38bdf8;
}

.separator {
  color: #334155;
  font-size: 12px;
}

/* Animações de Scroll Reveal */
.final-cta-section .animate-fade-up {
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.final-cta-section.is-visible .animate-fade-up {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 768px) {
  .final-cta-section {
    padding: 60px 20px;
  }
  .cta-headline {
    font-size: 26px;
  }
  .cta-actions {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
  .primary-btn, 
  .secondary-btn {
    width: 100%;
    justify-content: center;
  }
  .cta-footer-links {
    flex-direction: column;
    gap: 10px;
  }
  .separator {
    display: none;
  }
}
</style>