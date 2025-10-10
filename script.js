const selecoes = document.querySelectorAll('.img-perso');
const blocoDescricao = document.querySelector('.perso-direi');

function passmous() {
  selecoes.forEach(selecao => {
    selecao.addEventListener('mouseover', montarDiv);
  });
}

function montarDiv(evento) {
  const elemento = evento.currentTarget;
  const img = elemento.querySelector('img');
  const titulo = img?.alt || 'Sem título';
  const descricao = elemento.dataset.descricao || 'Sem descrição';
  const imgSrc = elemento.dataset.img || img?.src || '';

  blocoDescricao.innerHTML = `
    <h2 class="titulo">${titulo}</h2>
    ${imgSrc ? `<img class="imagem-perso-direi" src="${imgSrc}" alt="${titulo}">` : ''}
    <p class="desc-texto">${descricao}</p>
  `;
}

passmous();

