// ─────────────────────────────────────────────
//  Unión de todos los artículos por categoría
// ─────────────────────────────────────────────
const articles = {
    ...proyectosArticles,
    ...carrerasArticles,
    ...alumniArticles,
    ...eventosArticles,
};

// ─────────────────────────────────────────────
//  Navegación y lógica principal
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Mobile Menu
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Cargar artículo dinámico
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    if (articleId && articles[articleId]) {
        const article = articles[articleId];

        // Elementos del DOM
        const titleEl = document.getElementById('article-title');
        const categoryEl = document.getElementById('article-category');
        const authorEl = document.getElementById('article-author');
        const dateEl = document.getElementById('article-date');
        const bodyEl = document.getElementById('article-body');
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        const breadcrumbSection = document.getElementById('breadcrumb-section');

        // Actualizar contenido
        if (titleEl) titleEl.textContent = article.title;
        if (categoryEl) categoryEl.textContent = article.category;
        if (authorEl) authorEl.textContent = article.author;
        if (dateEl) dateEl.textContent = article.date;
        if (breadcrumbTitle) breadcrumbTitle.textContent = article.title;
        if (breadcrumbSection) breadcrumbSection.textContent = article.category;

        let contentHtml = '';
        if (article.lead) {
            contentHtml += `<p class="lead" style="font-size: 1.4rem; margin-bottom: 20px;">${article.lead}</p>`;
        }
        contentHtml += article.body;

        if (bodyEl) {
            bodyEl.innerHTML = contentHtml;
            bodyEl.style.textAlign = 'justify';

            if (articleId === 'niebla') {
                bodyEl.classList.add('article-niebla');
            }

            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }

        document.title = `${article.title} - QVerse`;

    } else if (window.location.pathname.includes('articulo.html')) {
        const bodyEl = document.getElementById('article-body');
        const titleEl = document.getElementById('article-title');

        if (titleEl) titleEl.textContent = 'Artículo no encontrado';
        if (bodyEl) bodyEl.innerHTML = '<p>Lo sentimos, el artículo que buscas no existe o ha sido movido.</p><a href="index.html" class="btn btn-primary" style="margin-top:20px; display:inline-block;">Volver al inicio</a>';
    }
});

// ─────────────────────────────────────────────
//  Tablón de Ofertas
// ─────────────────────────────────────────────
function toggleTablon() {
    const extra = document.getElementById('extra-items');
    const btn = document.getElementById('btn-tablon');

    if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.innerText = "Ver menos";
    } else {
        extra.style.display = "none";
        btn.innerText = "Ver tablón completo";
    }
}
