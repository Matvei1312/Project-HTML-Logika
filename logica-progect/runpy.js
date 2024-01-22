document.addEventListener('DOMContentLoaded', function() {
    // Отримайте посилання на кнопку
    var startButton = document.getElementById('startButton');

    // Додайте обробник подій для натискання кнопки
    startButton.addEventListener('click', function() {
        // Тут можна викликати код, який ви хочете виконати при натисканні кнопки
        // Наприклад, викликати Python-програму через використання AJAX або fetch

        // Приклад виклику Python-скрипта через fetch:
        fetch('runPythonScript.php') // Замініть на шлях до вашого серверного скрипта
            .then(response => response.text())
            .then(data => {
                console.log(data); // Вивести вивід Python-програми у консоль
            })
            .catch(error => {
                console.error('Помилка:', error);
            });
    });
});
