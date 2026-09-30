/* ============ script.js (começa aqui) ============
   Usa a lista FIGURAS definida em data.js.
   Não precisa ser alterado para adicionar novas pessoas. */
(function () {
  const $ = (id) => document.getElementById(id);
  const grade = $("grade"), filtros = $("filtros"), busca = $("busca");
  const modal = $("modal"), conteudo = $("m-conteudo");
  let categoria = "Todas";

  // Remove acentos e maiúsculas (para a busca e para os códigos de categoria)
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const iniciais = (nome) => {
    const p = nome.split(" ").filter((w) => /^[A-ZÀ-Ý]/.test(w));
    return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  };

  // Imagem real, se houver; senão um quadro com as iniciais
  function midia(f, extra = "") {
    const vazio = `<div class="media ${extra}" aria-hidden="true">${esc(iniciais(f.nome))}</div>`;
    if (!f.imagem) return vazio;
    return `<img class="media ${extra}" src="${esc(f.imagem)}" alt="${esc(f.nome)}" loading="lazy" onerror="this.outerHTML='${vazio.replace(/'/g, "\\'")}'">`;
  }

  function criarFiltros() {
    const cats = ["Todas", ...new Set(FIGURAS.map((f) => f.categoria))];
    filtros.innerHTML = cats.map((c) => `<button class="chip" type="button" aria-pressed="${c === categoria}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  }

  function renderizar() {
    const q = norm(busca.value.trim());
    const lista = FIGURAS.filter((f) =>
      (categoria === "Todas" || f.categoria === categoria) &&
      (norm(f.nome).includes(q) || norm(f.nomeCompleto || "").includes(q)));
    grade.innerHTML = lista.map((f) => `
      <article class="card" data-cat="${slug(f.categoria)}">
        ${midia(f)}
        <div class="card-body">
          <h2>${esc(f.nome)}</h2>
          <span class="period">${esc(f.periodo)}</span>
          <span class="tag">${esc(f.categoria)}</span>
          <p class="desc">${esc(f.descricao)}</p>
          <button class="btn" type="button" data-id="${esc(f.id)}">Ver história</button>
        </div>
      </article>`).join("");
    $("vazio").hidden = lista.length > 0;
    $("contador").textContent = `${lista.length} de ${FIGURAS.length} figuras`;
  }

  function abrir(id) {
    const f = FIGURAS.find((x) => x.id === id);
    if (!f) return;
    const li = (arr) => arr.map((t) => `<li>${esc(t)}</li>`).join("");
    conteudo.innerHTML = `
      <div data-cat="${slug(f.categoria)}">
        ${midia(f, "m-media")}
        <div class="m-body">
          <h2 id="m-nome">${esc(f.nome)}</h2>
          <p class="full">${esc(f.nomeCompleto)}</p>
          <dl>
            <dt>Nascimento</dt><dd>${esc(f.nascimento)}</dd>
            ${f.falecimento ? `<dt>Falecimento</dt><dd>${esc(f.falecimento)}</dd>` : ""}
            <dt>Local</dt><dd>${esc(f.local)}</dd>
            <dt>Categoria</dt><dd>${esc(f.categoria)}</dd>
          </dl>
          <h3>Biografia</h3><p>${esc(f.biografia)}</p>
          <h3>Principais acontecimentos</h3><ul>${li(f.acontecimentos)}</ul>
          <h3>Curiosidades</h3><ul>${li(f.curiosidades)}</ul>
          <h3>Legado histórico</h3><p>${esc(f.legado)}</p>
        </div>
      </div>`;
    modal.showModal();
    modal.scrollTop = 0;
  }

  // Eventos
  busca.addEventListener("input", renderizar);
  filtros.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    categoria = b.dataset.c;
    criarFiltros();
    renderizar();
  });
  grade.addEventListener("click", (e) => {
    const b = e.target.closest("[data-id]");
    if (b) abrir(b.dataset.id);
  });
  $("fechar").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); }); // clique fora fecha

  criarFiltros();
  renderizar();
})();
/* ============ script.js (termina aqui) ============ */
