document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

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

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
});

function abreOuFechaResposta({ target }) {
  const classe = 'faq__questions__item--is-open';
  const elementoPai = target.parentNode;

  elementoPai.classList.toggle(classe);
}

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
