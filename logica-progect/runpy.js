const { exec } = require('child_process');

// Замініть 'your_python_file.py' на шлях до вашого Python файлу
const pythonFilePath = 'main.py';

// Використовуйте команду для запуску Python файлу
exec(`python ${pythonFilePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка при виконанні Python файлу: ${error}`);
    return;
  }
  console.log(`Вивід Python файлу: ${stdout}`);
});
