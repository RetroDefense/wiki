document.getElementById('toggle-aside').addEventListener('click', function() {
    var aside = document.getElementById('aside-section');
    if (aside.style.display === 'none' || aside.style.display === '') {
        aside.style.display = 'block';
    } else {
        aside.style.display = 'none';
    }
});