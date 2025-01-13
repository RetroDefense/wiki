const aside = document.getElementById('aside-section');
const toggleButton = document.getElementById('toggle-aside');

toggleButton.addEventListener('click', () => {
    aside.classList.toggle('open');
});
