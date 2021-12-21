// Для работы с путями
const path = require('path');

// Имя файла
console.log(path.basename(__filename));
// Имя директории (путь)
console.log(path.dirname(__dirname));
// расширение файла
console.log(path.extname(__filename));
// Возвращает объект о файле (путь, файл, расширение, имя)
console.log(path.parse(__filename));
// соединяет строки в одну (имеется ввиду именно путь!) = текущая папка + папка тест + имя файла
console.log(path.join(__dirname, 'test', 'second.html'));
// похожий метод - работет с абсолютными путями
console.log(path.resolve(__dirname, 'test', 'second.html'));