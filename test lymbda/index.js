let str = 'abcde';

function dotsGenerator(string) {
    /* cчитаем количество комбинаций точек в строке 2 в степени длина строки - 1, 
    в данном случае 16, 2 потому что 2 значения - точка или есть или нет */
    const possibilites = Math.pow(2, string.length - 1);
    // создаем массив состоящий из разделенных элементов строки, в данном случае 5
    const arr = string.split('');
    // результирующий массив размером possibilites - 16 элементов
    const strings = new Array(possibilites);
    // нулевой элемент - строка без изменений
    strings[0] = string;
    /* 2 вложенных цикла, первый на количество проходов - possibilites (2**4 = 16), 
    и внутри второй проходов arr.length (5 - количество элементов в строке) */
    for (let i = 1; i < possibilites; i++) {
    // записываем в переменную элемент пустую строку и передаем её в следующий цикл
        let element = '';
        // 5 проходов - формирование строки с точками
        for (let index = 0; index < arr.length; index++) {
            /* на каждой итерации (всего 5 в данном случае), 
            добавляем в элемент значение arr, например arr[0] = 'a', arr[1] = 'b'...*/
            element += arr[index];
            /* расчет места установки точки i = 1-16; index = 1-5; расчет идет побитово, путем сдвигания 
            бита на число index, при выполнении условия &-побитовое (умножение) с 1 
            выполняется расстановка точек и наполнение результирующего массива комбинациями */
            if ((i >> index) & 1) {
                element += '.';
            } else {
            // при невыполнении условия точка не устанавливается между символами строки
                element += '';    
            }
        }
        // наполнение результирующего массива комбинациями строк
        strings[i] = element;
    }
    
    return strings;
}

console.log(dotsGenerator(str));