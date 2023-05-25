const btnUpRef = document.querySelector('.up-btn');

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

btnUpRef.addEventListener('click', scrollToTop);

const showBtn = () => {
  btnUpRef.classList.remove('is-hidden');
};

const hideBtn = () => {
  btnUpRef.classList.add('is-hidden');
};

let lastScrollY = 0;

const onScroll = () => {
  const screenHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (lastScrollY < scrollY || scrollY < screenHeight) {
    hideBtn();
  }
  if (lastScrollY > scrollY && scrollY > screenHeight) {
    showBtn();
  }
  lastScrollY = scrollY;
};

window.addEventListener('scroll', onScroll);
