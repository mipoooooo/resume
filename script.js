document.addEventListener('DOMContentLoaded', () => {
  const starsContainers = document.querySelectorAll('.stars');

  starsContainers.forEach(container => {
    const rating = parseInt(container.getAttribute('data-rating'), 10);
    const maxStars = 5;
    container.innerHTML = '';

    for (let i = 1; i <= maxStars; i++) {
      const star = document.createElement('span');
      star.textContent = i <= rating ? '★' : '☆';
      container.appendChild(star);
    }
  });
});
