const listBtnRef = document.querySelector('.section-portfolio__list-filter');
const radioBtnsRef = document.querySelectorAll('.filter-radio');
const cardsRef = document.querySelectorAll('.section-portfolio__item');

const filterCards = () => {
  const checkedBtn = [];

  [...radioBtnsRef].forEach(elem => {
    if (elem.checked) {
      elem.parentElement.classList.add('checked');
      checkedBtn.push(elem);
    } else {
      elem.parentElement.classList.remove('checked');
    }
  });

  const checkedType = checkedBtn[0].value;

  [...cardsRef].forEach(elem => {
    elem.classList.remove('hide');
    const currentType = elem.dataset.type;
    if (currentType !== checkedType && checkedType !== 'Усі') {
      elem.classList.add('hide');
    }
  });
};

listBtnRef.addEventListener('click', filterCards);
