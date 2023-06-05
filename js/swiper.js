
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const showMoreBtn = document.getElementById('show-more-btn');
const content = document.getElementById('content');
let showingMore = false;

showMoreBtn.addEventListener('click', () => {
  if (!showingMore) {
    content.querySelectorAll('div:not(:nth-child(-n+6))').forEach((div) => {
      div.style.display = 'block';
    });
    showMoreBtn.innerText = 'Убрать';
    showingMore = true;
  } else {
    content.querySelectorAll('div:not(:nth-child(-n+6))').forEach((div) => {
      div.style.display = 'none';
    });
    showMoreBtn.innerText = 'Показать все';
    showingMore = false;
  }
});
