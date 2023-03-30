document.addEventListener('DOMContentLoaded', function () {
  // Header, ocultando e exibir elementos
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.clientHeight;

  window.addEventListener('scroll', function () {
    const scrollHeightPosition = window.scrollY;

    if (scrollHeightPosition < heroHeight) {
      ocultaElementosDoHeader();
    } else exibeElementosDoHeader();
  });

  // Seção de atrações, programação das abas
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (botao) {
      const abaId = botao.target.dataset.tabButton;
      const abaAlvo = document.querySelector(`[data-tab-id="${abaId}"]`);
      escondeTodasAbas();
      removeBotaoAtivo();
      abaAlvo.classList.add('shows__list--is--active');
      botao.target.classList.add('shows__tabs__button--is--active');
    });
  }

  // Seção FAQ accordion
  const questions = document.querySelectorAll('[data-faq-question]');

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
});

// Seção FAQ accordion
function abreOuFechaResposta({ target }) {
  const classe = 'faq__questions__item--is-open';
  const elementoPai = target.parentNode;

  elementoPai.classList.toggle(classe);
}

// Seção de atrações, programação das abas
function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is--active');
  }
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is--active');
  }
}

// Header, ocultando e exibir elementos
function ocultaElementosDoHeader() {
  const header = document.querySelector('.header');
  header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
  const header = document.querySelector('.header');
  header.classList.remove('header--is-hidden');
}
