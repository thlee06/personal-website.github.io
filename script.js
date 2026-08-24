// ─── Scroll-driven nav (index.html hero) ──────────────────────────────────────
(function () {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('solid', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── Featured projects on index.html ──────────────────────────────────────────
(function () {
  const container = document.getElementById('featured-projects');
  if (!container || typeof PROJECTS === 'undefined') return;

  // Show the first 3 projects as featured
  const featured = PROJECTS.slice(0, 3);

  container.innerHTML = featured.map(p => `
    <article class="project-entry">
      <a href="project.html?id=${p.id}">
        <h3 class="project-entry-title">${p.title}</h3>
        <p class="project-entry-desc">${p.cardText}</p>
      </a>
      <p class="project-entry-meta">${p.date}</p>
    </article>
  `).join('');
})();

// ─── Project listing on projects.html ─────────────────────────────────────────
(function () {
  const container = document.getElementById('project-listing');
  if (!container || typeof PROJECTS === 'undefined' || typeof ERAS === 'undefined') return;

  ERAS.forEach(era => {
    const projects = PROJECTS.filter(p => p.era === era.id);
    if (!projects.length) return;

    const eraHTML = `
      <div class="era-divider">
        <h2>${era.label}</h2>
        <span>${era.years}</span>
      </div>
    `;

    const projectsHTML = projects.map(p => `
      <article class="project-entry">
        <a href="project.html?id=${p.id}">
          <h2 class="project-entry-title">${p.title}</h2>
          <h3 class="project-entry-desc">${p.cardText}</h3>
        </a>
        <p class="project-entry-meta">${p.date}</p>
      </article>
    `).join('');

    container.innerHTML += eraHTML + projectsHTML;
  });
})();

// ─── Project detail on project.html ───────────────────────────────────────────
(function () {
  const titleEl = document.getElementById('project-title');
  const metaEl = document.getElementById('project-meta');
  const tagsEl = document.getElementById('project-tags');
  const heroEl = document.getElementById('hero-img');
  const bodyEl = document.getElementById('project-body');

  if (!titleEl || typeof PROJECTS === 'undefined') return;

  const id = new URLSearchParams(window.location.search).get('id');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    titleEl.textContent = 'Project not found';
    bodyEl.innerHTML = '<p><a href="projects.html">&larr; Back to Projects</a></p>';
    return;
  }

  document.title = project.title + ' — Teddy Lee';
  titleEl.textContent = project.title;
  metaEl.textContent = project.date + ' · ' + project.tagline;

  if (project.tags && project.tags.length) {
    tagsEl.innerHTML = project.tags
      .map(t => `<span class="tag tag-outline">${t}</span>`)
      .join('');
  }

  heroEl.src = project.heroImage;
  heroEl.alt = project.heroAlt;

  bodyEl.innerHTML = `
    <div>
      <h2 class="detail-section-label">Overview</h2>
      ${project.overview}
    </div>
    <div>
      <h2 class="detail-section-label">Technical Details</h2>
      ${project.technical}
    </div>
  `;
})();
