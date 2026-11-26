const projetos = [
  {
    id: 1,
    titulo: "Módulo 01 — Landing Page Institucional",
    categoria: "web",
    categoriaLabel: "HTML5 & CSS3",
    resumo: "Página responsiva criada para praticar estrutura semântica, tipografia e grelhas CSS.",
    tecnologias: ["HTML5", "CSS Grid", "Flexbox", "Responsivo"],
    aprendizagens: [
      "Estruturação semântica com header, main, section e footer",
      "Alinhamento moderno com CSS Grid e Flexbox",
      "Adaptação para dispositivos móveis com media queries"
    ],
    repoUrl: "https://github.com"
  },
  {
    id: 2,
    titulo: "Módulo 02 — Gestor de Tarefas Interativo",
    categoria: "js",
    categoriaLabel: "JavaScript",
    resumo: "Aplicação de gestão de tarefas com filtragem dinâmica, estado e persistência local.",
    tecnologias: ["JavaScript ES6", "DOM", "LocalStorage"],
    aprendizagens: [
      "Manipulação dinâmica de elementos HTML via JavaScript",
      "Uso de métodos de arrays (filter, map, forEach)",
      "Gravação de dados no navegador com LocalStorage"
    ],
    repoUrl: "https://github.com"
  },
  {
    id: 3,
    titulo: "Módulo 03 — Painel de Métricas & Relatórios",
    categoria: "dados",
    categoriaLabel: "Dados & SQL",
    resumo: "Modelo relacional e consultas SQL para análise de vendas e desempenho de formação.",
    tecnologias: ["SQL", "Modelação ER", "JSON"],
    aprendizagens: [
      "Criação de tabelas normalizadas e chaves estrangeiras",
      "Consultas com JOIN, GROUP BY e funções de agregação",
      "Exportação de resultados estruturados em JSON"
    ],
    repoUrl: "https://github.com"
  },
  {
    id: 4,
    titulo: "Módulo 04 — Simulador de Orçamentos",
    categoria: "js",
    categoriaLabel: "JavaScript",
    resumo: "Calculadora interativa de serviços com cálculo automático de IVA e resumo exportável.",
    tecnologias: ["JavaScript", "Formulários", "Validação"],
    aprendizagens: [
      "Validação de inputs e tratamento de eventos em tempo real",
      "Cálculos financeiros com arredondamento rigoroso",
      "Organização modular do código em funções reutilizáveis"
    ],
    repoUrl: "https://github.com"
  }
];

const grid = document.getElementById("projects-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const themeToggle = document.getElementById("theme-toggle");

function renderProjetos(filtro = "all") {
  const lista = filtro === "all"
    ? projetos
    : projetos.filter(p => p.categoria === filtro);

  grid.innerHTML = lista.map(p => `
    <article class="project-card">
      <span class="badge">${p.categoriaLabel}</span>
      <h3>${p.titulo}</h3>
      <p>${p.resumo}</p>
      <div class="project-tags">
        ${p.tecnologias.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <button class="btn btn-secondary" onclick="abrirModal(${p.id})">Ver Detalhes</button>
    </article>
  `).join("");
}

function abrirModal(id) {
  const projeto = projetos.find(p => p.id === id);
  if (!projeto) return;

  document.getElementById("modal-tag").textContent = projeto.categoriaLabel;
  document.getElementById("modal-title").textContent = projeto.titulo;
  document.getElementById("modal-desc").textContent = projeto.resumo;
  document.getElementById("modal-repo").href = projeto.repoUrl;

  const listaUl = document.getElementById("modal-learnings");
  listaUl.innerHTML = projeto.aprendizagens.map(item => `<li>${item}</li>`).join("");

  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjetos(btn.dataset.filter);
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

renderProjetos();