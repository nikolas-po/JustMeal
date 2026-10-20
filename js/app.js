let currentFilter = 'Все';

function updateCatalog() {
  const cardsContainer = document.querySelector('.cards');
  const sortSelect = document.querySelector('.sort-select');
  if (!cardsContainer || !sortSelect) return;

  const cardsArray = Array.from(cardsContainer.querySelectorAll('.card'));

  cardsArray.sort((a, b) => {
    const priceA = parseInt(a.querySelector('.price').textContent.replace(/\s/g, ''));
    const priceB = parseInt(b.querySelector('.price').textContent.replace(/\s/g, ''));
    return sortSelect.value === 'price-desc' ? priceB - priceA : priceA - priceB;
  });

  cardsArray.forEach(card => {
    const cardBadge = card.querySelector('.badge').textContent.trim();
    
    if (currentFilter === 'Все' || cardBadge === currentFilter) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
    
    cardsContainer.appendChild(card);
  });
}

function filterCatalog(clickedButton) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => btn.classList.remove('active'));
  clickedButton.classList.add('active');

  currentFilter = clickedButton.textContent.trim();
  updateCatalog();
}

function sortCatalog() {
  updateCatalog();
}

document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('mainImg');
  const thumbs = document.querySelectorAll('.thumb');

  if (mainImg && thumbs.length > 0) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        
        const thumbImgSrc = thumb.querySelector('img').getAttribute('src');
        mainImg.setAttribute('src', thumbImgSrc);
      });
    });
  }
});
