window.onload = function() {
    var card = document.getElementById('card');
    card.addEventListener('click', function() {
    card.classList.toggle('flipped');
    setTimeout(function() {
        card.classList.remove('flipped');
      }, 5000); // 5000 milliseconds = 5 seconds
    });
};