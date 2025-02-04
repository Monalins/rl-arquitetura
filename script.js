let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);
document.addEventListener('DOMContentLoaded', function () {
    const filtros = document.querySelectorAll('.filtros button');
    const projetos = document.querySelectorAll('.projeto');

    // Função para ordenar projetos por data
    function ordenarProjetos() {
        const grid = document.querySelector('.grid');
        const projetosOrdenados = Array.from(projetos).sort((a, b) => {
            const dataA = a.getAttribute('data-data');
            const dataB = b.getAttribute('data-data');
            return new Date(dataA) - new Date(dataB);
        });

        // Limpa o grid e adiciona os projetos ordenados
        grid.innerHTML = '';
        projetosOrdenados.forEach(projeto => grid.appendChild(projeto));
    }

    // Filtra os projetos com base nas tags selecionadas
    function filtrarProjetos(tag) {
        projetos.forEach(projeto => {
            const tagsProjeto = projeto.getAttribute('data-tags').split(' ');
            if (tag === 'todos' || tagsProjeto.includes(tag)) {
                projeto.style.display = 'block';
            } else {
                projeto.style.display = 'none';
            }
        });
    }

    // Ordena os projetos ao carregar a página
    ordenarProjetos();

    // Adiciona eventos aos botões de filtro
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function () {
            const tag = this.getAttribute('data-tag');
            filtrarProjetos(tag);
        });
    });
});