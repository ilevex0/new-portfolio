<template>
  <div>
    <!-- Nova Seção: Know Me / Sobre -->
    <section id="about" class="about-section">
      <div class="about-container">
        <!-- Coluna da Esquerda: O Texto de Impacto -->
        <div class="about-text-content">
          <span class="section-tag">// 01. PROFILE</span>
          <h2 class="about-title">CRAFTING INTELLIGENT SYSTEMS & DIGITAL EXPERIENCES.</h2>
          <p class="about-description">
            I'm a software developer and game creator focused on artificial intelligence, 
            machine learning, and immersive digital environments. I build smart systems 
            that bridge raw logic with high-performance user interfaces.
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">AI & PPO</span>
              <span class="stat-label">Reinforcement Learning</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">VUE & JS</span>
              <span class="stat-label">Modern Frontend</span>
            </div>
          </div>
        </div>

        <!-- Coluna da Direita: Elemento Visual / Tech Card -->
        <div class="about-visual-card">
          <div class="terminal-box">
            <div class="terminal-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="terminal-title">status.js</span>
            </div>
            <div class="terminal-body">
              <p><span class="code-keyword">const</span> developer = &#123;</p>
              <p class="code-indent">name: <span class="code-string">"Developer"</span>,</p>
              <p class="code-indent">focus: <span class="code-string">"AI & Game Dev"</span>,</p>
              <p class="code-indent">status: <span class="code-string">"Ready to build"</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-section {
  width: 100%;
  min-height: 100vh;
  background-color: #0b0f19; /* Um tom de azul/preto bem profundo e moderno */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 10%;
  color: #ffffff;
  position: relative;
  z-index: 2;
}

.about-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.section-tag {
  font-family: "Orbitron", sans-serif;
  font-size: 14px;
  color: #38bdf8;
  letter-spacing: 2px;
  margin-bottom: 15px;
  display: block;
}

.about-title {
  font-family: "Orbitron", sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 24px;
}

.about-description {
  font-family: "Rajdhani", sans-serif;
  font-size: 1.2rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 40px;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.stat-number {
  font-family: "Orbitron", sans-serif;
  font-size: 1.2rem;
  color: #ffffff;
  display: block;
  font-weight: 600;
}

.stat-label {
  font-family: "Rajdhani", sans-serif;
  font-size: 1rem;
  color: #64748b;
}

/* Estilo do Card / Terminal à direita */
.terminal-box {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.terminal-header {
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }

.terminal-title {
  margin-left: auto;
  font-family: "Share Tech Mono", monospace;
  font-size: 0.85rem;
  color: #64748b;
}

.terminal-body {
  padding: 24px;
  font-family: "Share Tech Mono", monospace;
  font-size: 1.1rem;
  color: #e2e8f0;
  line-height: 1.5;
}

.code-keyword { color: #f43f5e; }
.code-string { color: #34d399; }
.code-indent { padding-left: 20px; }

/* Responsividade básica para telas menores */
@media (max-width: 900px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>