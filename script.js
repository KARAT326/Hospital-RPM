const newsItems = document.querySelectorAll('.news-item');
let currentIndex = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    newsItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % newsItems.length;
    newsItems[currentIndex].classList.add('active');
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    newsItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    newsItems[currentIndex].classList.add('active');
});

