import './global.css';

// ── Components ─────────────────────────────────

function nav() {
  return `
<nav class="nav">
  <a href="#/home" class="nav-logo">Derma<em>vision</em></a>
  <ul class="nav-links">
    <li><a href="#/home">Home</a></li>
    <li><a href="#/education">Education</a></li>
    <li><a href="#/diseases">Skin Diseases</a></li>
    <li><a href="#/scan">Scan</a></li>
  </ul>
  <a href="#/scan" class="btn btn-primary">Try it Free →</a>
</nav>`;
}

function footer() {
  return `
<footer class="footer">
  <div class="footer-logo">Derma<em>vision</em></div>
  <ul class="footer-links">
    <li><a href="#/home">Home</a></li>
    <li><a href="#/education">Education</a></li>
    <li><a href="#/diseases">Diseases</a></li>
    <li><a href="#/scan">Scan</a></li>
  </ul>
  <p class="footer-copy">© 2025 Dermavision</p>
</footer>`;
}

// ── Views ──────────────────────────────────────

const MARQUEE = [
  'AI-Powered Analysis', 'Dermatology Screening', 'Advanced Vision API',
  'Instant Results', 'Skin Condition Detection', 'Personalized Insights',
  'Privacy First', 'No Data Stored', 'Advanced AI Model'
];

const FEATURES = [
  { icon: '🔬', title: 'Vision AI Engine', desc: "Powered by a state-of-the-art vision model to detect skin patterns, textures, and potential conditions with medical-grade precision." },
  { icon: '⚡', title: 'Sub-3 Second Results', desc: 'Get comprehensive analysis in seconds. No waiting, no appointments — immediate, actionable skin health information on demand.' },
  { icon: '📋', title: 'Structured Reports', desc: 'Receive detailed reports: condition classification, severity assessment, step-by-step recommendations, and doctor-visit guidance.' },
  { icon: '🔒', title: 'Privacy by Design', desc: 'Your images are never stored or logged. All analysis happens ephemerally in real-time. Your skin data belongs to you, always.' },
  { icon: '🩺', title: 'Clinical Guidance', desc: 'Know exactly when to seek professional help. Dermavision flags conditions that warrant in-person dermatologist consultation.' },
  { icon: '🌐', title: 'Zero Installation', desc: 'No app download required. Works natively in any modern browser — desktop, tablet, or mobile — anywhere in the world.' }
];

const STEPS = [
  { n: '01', title: 'Upload Your Photo', desc: 'Take or upload a clear, well-lit photo of the skin area you\'d like analyzed. Drag & drop or click to browse. JPG, PNG, WEBP accepted.' },
  { n: '02', title: 'AI Scans & Analyzes', desc: 'Our vision model examines your image in real-time, analyzing texture, pigmentation, morphology, and surface patterns.' },
  { n: '03', title: 'Receive Your Report', desc: 'Get a structured report with findings, potential conditions, severity level, care recommendations, and when to see a doctor.' }
];

function HomeView() {
  const doubled = [...MARQUEE, ...MARQUEE];
  return `
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="glow glow-coral"></div>
        <div class="glow glow-purple"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="hero-inner">
        <div class="hero-left">
          <div class="hero-badge">
            <span class="badge-dot"></span> AI-Powered · Real-Time · Free
          </div>
          <h1 class="hero-title">See Your<br>Skin <span class="ital">Differently.</span></h1>
          <p class="hero-desc">Upload a photo and get instant AI-powered skin analysis. Dermavision uses advanced computer vision to identify potential skin conditions and give you personalized guidance.</p>
          <div class="hero-actions">
            <a href="#/scan" class="btn btn-primary btn-hero">Analyze My Skin</a>
          </div>
          <p class="hero-note">⚠ Informational only. Not a substitute for professional medical advice.</p>
          <div class="hero-stats">
            <div><div class="stat-n">50+</div><div class="stat-l">Conditions recognized</div></div>
            <div><div class="stat-n">&lt;3s</div><div class="stat-l">Average analysis time</div></div>
            <div><div class="stat-n">0%</div><div class="stat-l">Data retained</div></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="visual-card">
            <div class="visual-scan-area">
              <div class="demo-scan-line"></div>
              <div class="visual-scan-placeholder">
                <div class="visual-scan-icon">🫧</div><p class="visual-scan-text">Awaiting image…</p>
              </div>
            </div>
            <div class="visual-tags">
              <span class="vtag active">Texture Analysis</span><span class="vtag active">Pigmentation</span>
              <span class="vtag">Lesion Detection</span><span class="vtag">Severity Score</span><span class="vtag active">Recommendations</span>
            </div>
            <div class="visual-status">
              <div class="status-ring"></div> AI Vision Model — Active
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="marquee-wrap">
      <div class="marquee-track">
        ${doubled.map(t => `<div class="marquee-item"><span class="mq-dot"></span>${t}</div>`).join('')}
      </div>
    </div>

    <section class="section" id="features">
      <div class="section-head">
        <span class="section-kicker">Features</span>
        <h2 class="section-h">Built for <span class="thin">precision</span><br>and clarity.</h2>
      </div>
      <div class="features-grid">
        ${FEATURES.map(f => `
          <div class="feat-card">
            <div class="feat-icon">${f.icon}</div>
            <h3 class="feat-title">${f.title}</h3>
            <p class="feat-desc">${f.desc}</p>
          </div>`).join('')}
      </div>
    </section>

    <section class="section section-alt" id="how-it-works">
      <div class="section-head">
        <span class="section-kicker">How it works</span>
        <h2 class="section-h">Three steps <span class="thin">to clarity.</span></h2>
      </div>
      <div class="hiw-grid">
        ${STEPS.map((s, i) => `
          <div class="step-card">
            <span class="step-num">${s.n}</span>
            ${i < STEPS.length - 1 ? '<div class="step-arrow">→</div>' : ''}
            <h3 class="step-title">${s.title}</h3>
            <p class="step-desc">${s.desc}</p>
          </div>`).join('')}
      </div>
    </section>
  `;
}

function EducationView() {
  return `
    <section class="section" style="padding-top: calc(var(--nav-h) + 60px); min-height: 80vh;">
      <div class="section-head">
        <span class="section-kicker">Education</span>
        <h2 class="section-h">Why Early <span class="thin">Detection</span><br>Matters.</h2>
      </div>
      <div class="content-body" style="max-width: 800px; color: var(--text-2); line-height: 1.8; font-size: 1.1rem;">
        <p style="margin-bottom: 1.5rem;">Skin conditions can range from minor irritations to severe, life-threatening diseases like melanoma. Early identification is universally recognized by dermatologists as the most critical factor in successful treatment and management.</p>
        
        <div style="background: var(--bg-card); border: 1px solid var(--border-md); padding: 2rem; border-radius: var(--r-md); margin: 2rem 0;">
          <h3 style="color: var(--text); font-family: var(--font-d); font-size: 1.5rem; margin-bottom: 1rem;">The ABCDE Rule of Melanoma</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem;">
            <li><strong style="color: var(--coral);">A - Asymmetry:</strong> One half of the spot does not match the other half.</li>
            <li><strong style="color: var(--coral);">B - Border:</strong> The edges are irregular, ragged, or blurred.</li>
            <li><strong style="color: var(--coral);">C - Color:</strong> The color is not uniform and may include shades of brown, black, pink, or white.</li>
            <li><strong style="color: var(--coral);">D - Diameter:</strong> The spot is larger than 6 millimeters across (about the size of a pencil eraser).</li>
            <li><strong style="color: var(--coral);">E - Evolving:</strong> The mole is changing in size, shape, or color over time.</li>
          </ul>
        </div>
        
        <p>By regularly monitoring your skin and utilizing screening tools like Dermavision, you take a proactive step in preserving your skin's health. While AI cannot replace a medical professional, it serves as a powerful front-line tool to flag potential concerns.</p>
      </div>
    </section>
  `;
}

function DiseasesView() {
  return `
    <section class="section" style="padding-top: calc(var(--nav-h) + 60px); min-height: 80vh;">
      <div class="section-head">
        <span class="section-kicker">Information</span>
        <h2 class="section-h">Common Skin <span class="thin">Conditions.</span></h2>
      </div>
      <div class="diseases-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        
        <div class="feat-card" style="border: 1px solid var(--border-md); border-radius: var(--r-md); padding: 2rem;">
          <h3 class="feat-title">Melanoma</h3>
          <p class="feat-desc">The most serious type of skin cancer, developed in the cells that produce melanin. Often resembles moles and can develop from them.</p>
        </div>
        
        <div class="feat-card" style="border: 1px solid var(--border-md); border-radius: var(--r-md); padding: 2rem;">
          <h3 class="feat-title">Eczema (Atopic Dermatitis)</h3>
          <p class="feat-desc">A condition that makes your skin red and itchy. It's common in children but can occur at any age, often accompanied by asthma or hay fever.</p>
        </div>
        
        <div class="feat-card" style="border: 1px solid var(--border-md); border-radius: var(--r-md); padding: 2rem;">
          <h3 class="feat-title">Psoriasis</h3>
          <p class="feat-desc">A skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. It is a chronic, long-term disease with no cure.</p>
        </div>
        
        <div class="feat-card" style="border: 1px solid var(--border-md); border-radius: var(--r-md); padding: 2rem;">
          <h3 class="feat-title">Rosacea</h3>
          <p class="feat-desc">A common condition that causes redness and visible blood vessels in your face. It may also produce small, red, pus-filled bumps.</p>
        </div>
        
      </div>
    </section>
  `;
}

function ScanView() {
  return `
    <section class="section" id="scanner" style="padding-top: calc(var(--nav-h) + 60px);">
      <div class="section-head">
        <span class="section-kicker">Try it now</span>
        <h2 class="section-h">Analyze your <span class="thin">skin.</span></h2>
      </div>

      <div class="scanner-grid">
        <!-- Upload Zone -->
        <div class="upload-zone" id="uploadZone">
          <div class="scan-beam"></div>
          <img class="preview-img" id="previewImg" alt="Uploaded skin photo" />
          <div class="upload-ph">
            <div class="up-icon">📸</div>
            <p class="up-title">Drop your image here</p>
            <p class="up-sub">or click to browse files</p>
            <p class="up-fmt">JPG · PNG · WEBP · Max 10 MB</p>
          </div>
        </div>
        <input type="file" id="fileInput" accept="image/*" />

        <!-- Right Panel -->
        <div class="scanner-panel">
          <div class="panel-box">
            <div class="panel-head">
              <div class="panel-dot"></div><span class="panel-title">Medical Disclaimer</span>
            </div>
            <div class="panel-body">
              <p class="disclaimer-text">
                <strong>⚠ Important:</strong> Dermavision is an informational screening tool only.
                Results are <em>not</em> medical diagnoses. Always consult a qualified
                dermatologist or healthcare provider for medical advice.
              </p>
            </div>
          </div>

          <button class="scan-btn" id="scanBtn" disabled>Analyze Skin</button>

          <div class="panel-box">
            <div class="panel-head">
              <div class="panel-dot"></div><span class="panel-title">Analysis Results</span>
            </div>
            <div class="panel-body" id="resultsBody">
              <div class="results-empty">
                <div class="results-empty-icon">🔍</div>
                Upload an image and tap "Analyze Skin" to receive your results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ── Router ─────────────────────────────────────

const routes = {
  '/home': { render: HomeView },
  '/scan': { render: ScanView, onMount: setupScanner },
  '/education': { render: EducationView },
  '/diseases': { render: DiseasesView }
};

function router() {
  const hash = window.location.hash.slice(1) || '/home';
  const route = routes[hash] || routes['/home'];
  
  const contentEl = document.getElementById('router-view');
  if (contentEl) {
    // Basic fade transition
    contentEl.style.opacity = 0;
    setTimeout(() => {
      contentEl.innerHTML = route.render();
      window.scrollTo(0, 0);
      if (route.onMount) route.onMount();
      contentEl.style.opacity = 1;
    }, 150);
  } else {
    // Initial load when router-view doesn't exist yet
    document.getElementById('app').innerHTML = `
      ${nav()}
      <main id="router-view" style="transition: opacity 0.15s ease;">
        ${route.render()}
      </main>
      ${footer()}
    `;
    if (route.onMount) route.onMount();
  }
}

// ── App Initialization ─────────────────────────

window.addEventListener('hashchange', router);
router();

// ── Scanner Logic ─────────────────────────────

function setupScanner() {
  let uploadedBase64 = null;
  let uploadedMime   = null;

  const uploadZone  = document.getElementById('uploadZone');
  const fileInput   = document.getElementById('fileInput');
  const previewImg  = document.getElementById('previewImg');
  const scanBtn     = document.getElementById('scanBtn');
  const resultsBody = document.getElementById('resultsBody');

  if (!uploadZone || !scanBtn) return;

  uploadZone.addEventListener('click', () => fileInput.click());

  uploadZone.addEventListener('dragover',  e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
  uploadZone.addEventListener('dragleave', ()  => uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) loadFile(file);
  });

  fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) loadFile(file);
  });

  function loadFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      showError('Image too large. Please use an image under 10 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      uploadedBase64 = dataUrl.split(',')[1];
      uploadedMime   = file.type || 'image/jpeg';
      previewImg.src = dataUrl;
      uploadZone.classList.add('has-img');
      scanBtn.disabled = false;
      resultsBody.innerHTML = `
        <div class="results-empty">
          <div class="results-empty-icon">✅</div>
          Image ready. Tap "Analyze Skin" to begin.
        </div>`;
    };
    reader.readAsDataURL(file);
  }

  scanBtn.addEventListener('click', runAnalysis);

  async function runAnalysis() {
    if (!uploadedBase64) return;
    setLoading(true);
    resultsBody.innerHTML = `
      <div class="results-empty">
        <div class="results-empty-icon">🔬</div>
        Scanning your skin… this takes a moment.
      </div>`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are DermaVision's AI skin analysis engine.
Analyze the skin image provided and return ONLY a JSON object with no markdown, no preamble, no code fences.

Required JSON format:
{
  "isSkinImage": true or false,
  "notSkinReason": "explanation if not skin image",
  "observation": "What you see in the image (2–3 sentences)",
  "potentialConditions": ["condition 1", "condition 2"],
  "severity": "none" | "mild" | "moderate" | "severe",
  "recommendations": ["step 1", "step 2", "step 3"],
  "seekDoctorIf": "one sentence describing when to see a doctor",
  "disclaimer": "This analysis is for informational purposes only and does not constitute medical advice. Please consult a qualified dermatologist for any medical concerns."
}

Rules:
- If the image is not of human skin, set isSkinImage: false and explain in notSkinReason.
- potentialConditions should list 1–3 possibilities or be an empty array if skin looks healthy.
- Be informative and clear, never alarmist.
- recommendations must be practical and actionable.`,
          messages: [{
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: uploadedMime, data: uploadedBase64 } },
              { type: 'text', text: 'Please analyze this skin image and return your assessment as JSON.' }
            ]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Analysis failed (API error or key missing). Please ensure your backend is correctly configured.'); 
      }

      const data = await response.json();
      const raw  = (data.content || []).map(b => b.text || '').join('');
      let result = JSON.parse(raw.replace(/```json|```/g, '').trim());
      renderResults(result);

    } catch (err) {
      showError(err.message || "An error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  }

  function renderResults(r) {
    if (!r.isSkinImage) {
      resultsBody.innerHTML = `
        <div class="results-empty">
          <div class="results-empty-icon">🚫</div>
          ${r.notSkinReason || "This doesn't appear to be a skin image."}
        </div>`;
      return;
    }
    const sevClass = { none: 'sev-none', mild: 'sev-mild', moderate: 'sev-moderate', severe: 'sev-severe' }[r.severity] || 'sev-none';
    const conditions = r.potentialConditions?.length
      ? `<div class="result-block"><p class="r-label">Potential Conditions</p><p class="r-value">${r.potentialConditions.join(', ')}</p></div>`
      : `<div class="result-block"><p class="r-label">Conditions</p><p class="r-value" style="color:var(--text-2)">No notable conditions identified.</p></div>`;
    
    const recs = r.recommendations?.length
      ? `<ul class="rec-list">${r.recommendations.map(rc => `<li>${rc}</li>`).join('')}</ul>`
      : '';

    resultsBody.innerHTML = `
      <div class="result-block"><p class="r-label">Observation</p><p class="r-value">${r.observation}</p></div>
      ${conditions}
      <div class="result-block">
        <p class="r-label">Severity</p>
        <span class="severity-badge ${sevClass}">${r.severity.charAt(0).toUpperCase() + r.severity.slice(1)}</span>
      </div>
      ${recs ? `<div class="result-block"><p class="r-label">Recommendations</p>${recs}</div>` : ''}
      ${r.seekDoctorIf ? `<div class="result-block"><p class="r-label">See a Doctor If</p><p class="r-value-muted">${r.seekDoctorIf}</p></div>` : ''}
      <hr class="result-divider" />
      <p class="result-disclaimer">⚠ ${r.disclaimer}</p>
    `;
  }

  function setLoading(on) {
    scanBtn.disabled = on;
    scanBtn.textContent = on ? 'Analyzing…' : 'Analyze Skin';
    scanBtn.classList.toggle('loading', on);
    uploadZone.classList.toggle('scanning', on);
  }

  function showError(msg) {
    resultsBody.innerHTML = `
      <div class="results-empty" style="color:#f87171">
        <div class="results-empty-icon">⚠</div>
        ${msg}
      </div>`;
  }
}
