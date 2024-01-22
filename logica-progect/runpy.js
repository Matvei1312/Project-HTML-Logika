document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
        fetch('runpy2.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Помилка:', error);
            });
    });
});
