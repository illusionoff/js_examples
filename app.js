// 'use strict';

// Снипперы
//  #1 округление в меньшую сторону до целых
//  #8 доступ к символам строки
//  #9 значение по дефолту, если получаем не то, что хотим, возвращаем false
//  #10 Удаление дублекатов из массива или вывести дублекаты
//  #11 Конвертер в римские числа
//  #12 reduce
//  #12.3 reduce сумма положительных чисел
//  #12.4 reduce сумма положительных чисел работает не так как мы ожидам, необходимо начальное значение задать  путем добавление параметра 0 в конце
//  #12.5 reduce сумма положительных чисел работает
//  #12.6 reduce сумма положительных чисел работает
//  #12.7 reduce вывод укароченных данных из массива объектов
//  #13 is Array
//  #14 Выполнение функции один раз именно без this
//  #14.1 Выполнение функции один раз именно без this
//  #15 Методы массивов map
//  #16 Методы массивов filter
//  #17 Методы массивов shift, unshift, slice
//  #17.3 slice
//  #17 Методы массивов push, pop
//  #18 concat
//  #19 splice удаление элементов массива
//  #20 spread  ...
//  #20.2 spread clone
//  #20.3 spread string -> array
//  #20.4 spread set -> array
//  #20.6 spread node list
//  #21 every Методы массивов
//  #22 some Методы массивов
//  #23 find  Методы массивов
//  #24 findIndex  Методы массивов
//  #25 lastIndexOf  Методы массивов
//  #26 typeof
//  #29 comma
//  #30 async await
//  #31 валидация пароля для поржать
//  #32 частичное применение и замыкание в функциях
//  #33 Тест поиска индекса во вложенном массиве
//  #34 function declaration
//  #34.1 setinterval старт и стоп
//  #35 Визуальная оптимизация кода
//  #36 тест поддержуи чисел вида 1000_000_0000
//  #37 Задачи на собеседование
//  #38 reverse() реверс - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
//  #39 Визуальная оптимизация кода +
// #100 получилось запускать только один экземпляр таймера при многократном запуске функции. и ее останов

// // Снипперы
// // #1 округление в меньшую сторону до целых
// let n1 = 445.67;
// console.log(Math.floor(n1));
// console.log(~~n1);
// // #4
// let n4 = true;
// if (n4 === true) {
//     console.log('#4');
// }

// n4 && console.log('#4'); // не работает со значением false, 0 и другими преобразующимися в false
// // #5 в node не работает так как в браузере?
// let n5 = 3;
// // console.log(n5.toString); //  в node не работает
// console.log(`${n5}`);// работает и в node, так что может быть это лучше применять
// console.log("${n5}", typeof `${n5}`);
// //  #6 выбор функции по условию
// let n6 = 8;
// function f6_1(){
//     console.log('f6_1');
// }
// function f6_2(){
//     console.log('f6_2');
// }

// (n6 === 7 ? f6_1 : f6_2)(); // указывается только название функций без скобок
// // #7 обязательное значение ES7
// // (a = 5){}
// let f7_1 = (param = checkParam()) => {
//     return param;
// }

// let checkParam = () => {
//     throw new Error('Problem');
// }
// // console.log(f7_1());
// console.log(f7_1('Not problem'));

// // #8 доступ к символам строки
// let n8 = 'sample string';
// console.log(n8.charAt(4));
// console.log(n8[4]);

// // #9
// let n9 =`hello
// hi
// test`;
// console.log(n9);

// //  #9 значение по дефолту, если получаем не то, что хотим, возвращаем false
// // let n10 = 34;
// // let n10 = undefined;
// let n10;
// let result = n10 || false;
// console.log(result);

// // #10 Удаление дублекатов из массива или вывести дублекаты
// const arr =[1, 2, 3, 4, 1, 5, 6, 1, 7, 2]
// console.log(arr);
// // 1
// // let a1 = [...new Set(arr)];
// let a1 = Array.from(new Set(arr));
// console.log(a1);
// // 2
// let a2 = arr.filter( (item, index) =>  arr.indexOf(item) === index);
// console.log("a2=", a2);
// // выводим массив дубликатов ( наоборот)
// let a2_1 = arr.filter( (item, index) =>  arr.indexOf(item) !== index);
// console.log("a2_1=", a2_1);
// // 3
// let a3 = arr.reduce( (result, item) => result.includes(item) ? result : [...result, item], []);
// console.log("a3=", a3);
// //#11 Конвертер в римские числа
// const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const romaValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// const romes = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}

// function romanConvertOne(a) {
//   let result ='';
//   decimalValue.map( (item, index) => {
//     while (item <= a) {
//       result += romaValue[index];
//       a = a - item;
//       console.table({
//         "a" : a + item,
//         "item" : item,
//         "a = a - item" : a,
//         "result" : result
//       });
//     }
//   });
//   return result;
// }
// console.log('romanConvertOne(12)', romanConvertOne(12));

// //#12 reduce
// //#12.1
// let a = [22, 33, 44];
// let b = a.reduce( (accum, item) => {
//   accum += item;
//   console.log(accum);
//   return accum;
// });
// console.log('---------');
// console.log(b);

// //#12.2 reduce
// let a = [4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// });
// console.log('---------');
// console.log(b);

// //#12.3 reduce сумма положительных чисел
// let a = [4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// });
// console.log('---------');
// console.log(b);

// //#12.4 reduce сумма положительных чисел работает не так как мы ожидам, необходимо начальное значение задать  путем добавление параметра 0 в конце
// let a = [-3, 4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// });
// console.log('---------');
// console.log(b);
//

// //#12.5 reduce сумма положительных чисел работает
// let a = [-3, 4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// }, 0); // Начальное значение аккумулятора 0
// console.log('---------');
// console.log(b);

// //#12.6 reduce сумма положительных чисел работает
// let a = [-3, 4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// }, 0); // Начальное значение аккумулятора 0
// console.log('---------');
// console.log(b);

// // //#12.7 reduce вывод укароченных данных из массива объектов
// let a = [
//           {"id" : 55, "city" : "arc"},
//           {"id" : 75, "city" : "rcd"},
//           {"id" : 155, "city" : "sad"}
// ];

// // [55, 75, 155]
// let b = a.reduce( (accum, item) => {
//   accum.push(item.id);
//   return accum;
// }, []); // Начальное значение аккумулятора пустой массив
// console.log('---------');
// console.log(b);

// #13 is Array

// console.log(Array.isArray(b)); // true

// b = 'hello';

// console.log(Array.isArray(b)); // false

// #14 Выполнение функции один раз

// function one() {
//   console.log('one');
// }
// one();
// one();
// one();

// // #14 Выполнение функции один раз именно без this
// function one() {
//   if (one.isRun) {
//     return false;
//   }
//   console.log('one');
//   one.isRun = true;
// }
// one();
// one();
// one();

// #14.1 Выполнение функции один раз именно без this
// function one() {
//   if (one.isRun) {
//     return false;
//   }
//   console.log('one');
//   one.isRun = true;
// }
// one();
// one();
// one();

// function two() {
//   console.log('two');
// }

// document.querySelector('button').onclick = one;
// document.querySelector('button').addEventListener('click', one);

// document.querySelector('button').onclick = () => {
//   document.querySelector('button').onclick = null;
//   two();
// }

// document.querySelector('button').addEventListener('click', two, { once: true});

// function three() {
//   console.log('three');
// }

// document.querySelector('button').onclick = () => {
//   three();
//   three = function (){ return false;}
// }

// let four = function four() {
//   console.log('4');
// }

// document.querySelector('button').onclick = () => {
//   four();
//   four = () => {};
// }

// const myFunction  = {
//   "five": function () {
//     console.log(5);
//   }
// }
// // document.querySelector('button').onclick = myFunction.five;
// document.querySelector('button').onclick = () => {
//   myFunction.five();
//   delete myFunction.five;
// }

// // #15 Методы массивов map
// const temp = [0, 4, 4, 4, 8 , 10, 6, 4, 3, -1, -2, -2]; // C
// // F= C*1.8 +32

// let tF = temp.map(item => {
//   console.log(item);
//   return 32+item*1.8;
// });

// console.log(tF);

// let a = [33, 44, 55];
// a[10] = 90;
// let b = a.map(item => {
//   return item;
// });
// let b = a.map((item, index, array) => {
//   return index;
// });

// let b = a.map((item, index, array) => {
// if (index == 1) {
//   array[index+1] = 66;
// }
//   return item;
// });

// let b = a.map((item, index, array) => {
//   if (index == 2) {
//     array[index+1] = 66;
//   }
//     return item;
//   });
// console.log(b);
// console.log(a);


// const z = [
//   {"name": ' Ivan', 'order': 12, 'sum': '123,5'},
//   {"name": ' Sergey  ', 'order': 12, 'sum': '123.5'},
//   {"name": 'matilda  ', 'order': 12, 'sum': '123, 5'},
//   {"name": 'Ivanov Petr  ', 'order': 12, 'sum': '123,50'},
// ];

// const zBack = z.map(item => {
//   item.name = item.name.trim().toLocaleLowerCase();
//   return item;
// });

// console.log(zBack);

// #16 Методы массивов filter
// Не меняет исходный массив, а создает новый в который могут попасть только элементы исходного массива
// const clients = [
// {"lin": "dsdffdsfds", "user": "Ivanov", "debt": 4},
// {"lin": "87878dsfds", "user": "Petrov", "debt": 0},
// {"lin": "ds7676dsfd", "user": "Sidorov", "debt": 0},
// {"lin": "ds565fdsfd", "user": "My", "debt": 14},
// {"lin": "565retrrtt", "user": "VVV", "debt": 71400},
// {"lin": "dsdffd5656", "user": "OOOOO", "debt": 2654},
// ];

// // const a = [3,1,3,5,3,4,5,2,67,2,9,6,7];

// // let b = a.filter((item, index, array) => {
// //   if (item > 5) return true; // filter в return либо false либо true,
// //   // нельзя использовать иные значения - будут преобразованы в true false
// // });
// // //
// // console.log(a);
// // console.log(b);

//       // let debts = clients.filter(item => (item.debt >= 10));
// // Сортируем полченный результат снисхождению стоимости
// let debts = clients
//   .filter(item => (item.debt >= 10))
//   .sort((a, b) => (b.debt - a.debt));

// console.log(debts);


// #17 Методы массивов shift, unshift, slice

// Shift удаляет и возвращает нулевой элемент массива - начало массива
// а массив переиндексируется
// для больших массивов ресурсоемкая операция из=за перемндексации
// let a = [3, 4, 5];
// let b = a.shift();
// console.log(b);
// console.log(a);
// // unshift добавление нового элемента в начало массива с переиндексацией массива
// // для больших массивов ресурсоемкая операция из=за перемндексации
// let c = a.unshift(22);
// console.log(a);
// console.log(c);

// // #17.3 slice
// // Не меняет исходный массив
// let d = [22, 33, 44, 55, 66, 77, 88, 99];
// // let f = d.slice(3);
// // от включительно 3 до указанной 5 не включитально
// let f = d.slice(3, 5);
// console.log(d);
// console.log(f);

// let e = 'hello';
//           // e.shift();
// // slice можно применять к строке, а shift, unshift нельзя
// console.log(e.slice(1,4));

// #17 Методы массивов push, pop

// #17.1 push
// let a = [99, 88];
// console.log(a);
// a.push(44);
// // Можно добавлять сразу несколько значений в массив
// // a.push(44, 33, 22);
// console.log(a);
// // Возвращает итоговую длинну массива а не сам массив
// console.log(a.push(111));

// //  #17.2 pop удаление последего элемента массива
// a.pop();
// console.log(a);
// // удаление последнего элемента и возврат его значения
// console.log(a.pop());
// console.log(a);

// const b = [3];
// console.log(b);
// console.log(b.pop());
// console.log(b);
// console.log(b.pop());
// // если элементы закончились возвращает undefined
// console.log(b);

// let car = [];
// document.querySelector('.push').onclick = () => {
//     let id = +document.querySelector('#goods').value;
//     if (!car.includes(id)) {
//         car.push(id);
//     }
//     console.log(car);
// }

// document.querySelector('.pop').onclick = () => {
//     // let id = +document.querySelector('#goods').value;
//     let goods = car.pop();
//     console.log('товар id ' + goods + ' был удален');
//     console.log(car);
// }

// // #18 concat
// // исходные массивы не изменяются
// // объекты копируются по ссылке, только поверхностно для примитивов
// // можно "слаживать" множество массивов сразу
// // можно применять к строкам
// const a1 = [21, 22, 23, 24];
// const a2 = [31, 32, 33, 34];
// const a3 = [48, 49, 50];
// // если массив частично не заполнен, в результиорующем массиве будут пропуски, а длинна массива будет  большая учитывая пропущенные элементы
// a3[22] = 100;
// const b = a1.concat(a2, a3);
// console.log(b);

// // #19 splice удаление элементов массива
// // Изменяет исходный массив
// let k =[33, 44, 55, 66, 77, 88];
// // начиная позицию и количество
// //  если одно число, то все с указанной позиции
// // k.splice(2, 2);
// // третий необязательный параметр записывается в массив вместо удаляемых данных, может быть строкой
// // k.splice(2, 2, 555);
// // k.splice(2, 2, '555');
// // можно вставлять множество элементов вместо удаленных
// k.splice(2, 2, '555', 'were', 'wewewqe', 'wewe', 'rewre');
// console.log(k);

// //  //#20 spread  ...
// // 1 spread
// const a = [3, 4 , 5];
// const b = ['c', 'd', 'e'];
// //merge
// const c = [...a, ...b];
// console.log(c);

// // #20.2 spread clone

// const d = [...b];
// console.log(d);

// // #20.3 spread string -> array

// const e = [...'hello'];
// console.log(e);

// // #20.4 spread set -> array
// const f =[...new Set([1,1,1,2,3,4,5,2,3])];
// console.log(f);

// // #20.5 spread

// function test() {
//   console.log(arguments);// не массив а другая структура данных
//   console.log([...arguments]); // чистый массив получаем
// }

// test (3,4,5,6,7);

// // #20.6 spread node list
// // querySelectorAll()

// let p = document.querySelectorAll('p');
// console.dir(p);
// console.log([...p]);


// //  // #21 every Методы массивов
// const a =[5, 2, 1, 1, 4, 5, 6, 7, 8];
// const c =[
//   {name: "Ivan", age: 12},
//   {name: "Inna", age: 22},
//   {name: "serg", age: 23},
//   {name: "antony", age: 33}
// ];
// // let b = a.every(item => {
// //   if (item > 0 && item < 20) return true;
// // });

// let b = c.every(item => {
//   if (item.age > 16 ) return true;
// });
// console.log(b);

// //  // #22 some Методы массивов

// const a =[5, 2, 1, 1, 4, 5, 6, 7, 8];
// const c =[
//   {name: "Ivan", age: 23},
//   {name: "Inna", age: 14},
//   {name: "serg", age: 15},
//   {name: "antony", age: 33}
// ];

// let b = c.some(item => {
//   if (item.age < 16 ) return true;
// });
// //  Если массив пустой то возращает false
// console.log(b);

// //  // #23 find  Методы массивов
// // const a =[20, 30, 40, 50];
// const a =[
//   {name: "Ivan", age: 54},
//   {name: "Inna", age: 46},
//   {name: "serg", age: 34},
//   {name: "antony", age: 44},
//   {name: "antony", age: 14}
// ];
// // let b = a.find(item => {
// //   if (item >= 33 && item <= 45) {
// //     return true;
// //   }
// // });
// let b = a.find(item => {
//   if (item.age <= 18) {
//     return true;
//   }
// });
// //  Не работает со строками
// //  Если ничего не нашли возвращает undifined
// console.log(b);

// //  //#24 findIndex  Методы массивов
// const c = [22, 33, 44, 55, 66, 77];
// const d = 'hello';
// // let b = c.findIndex(item => {
// //   if (item > 48) {
// //     return true;
// //   }
// // });
// //  Не работает со строками
// //  Если ничего не нашли возвращает -1
// console.log(b);

// // //  // #25 lastIndexOf  Методы массивов
// const a = [22, 33, 44, 55, 66, 33, 77];
// const d = 'hello';
// // let b = d.lastIndexOf('l');
// let b = a.lastIndexOf(33);
// //  Если ничего не нашли возвращает -1
// console.log(b);

// // #26 typeof
// https://www.youtube.com/watch?v=mcMI0Pnjqd4&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.
// %D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE
// let  a = 555;
// typeof(a);
// console.log(a);

// let a = typeof('str');
// console.log(a); //string

// let a = typeof(null);
// console.log(a); //object

// let obj = {}
// let a = typeof(obj);
// console.log(a); //object

// let obj2 = null
// let a = typeof(obj2);
// console.log(a); //object

// Проверка обект либо null
// if( obj !== null && typeof(obj) === object);


// let ar = [];
// let a = typeof(ar);
// console.log(a);// object

// let ar = [];
// let a = Array.isArray(ar);
// console.log(a);//true

// let a = 5*false; // 0
// let a = 5/'b'; // NaN
// let a = 5/false; // Infinity
// console.log(a);

// let a = typeof(NaN); // number
// console.log(a);

// let a = isNaN(NaN); // true
// console.log(a);

// let a = isNaN('hello'); // true
// console.log(a);

// let a = function hi() {};
// let b = typeof(a); // function
// console.log(b);

// let a = () => {};
// let b = typeof(a); // function
// console.log(b);

// #29 comma

// function f3(z) {
// z = z * 2, z = z *3;
//     return z
// }
// console.log(f3(3));

// function f2(z) {
//     z = (z++, z * 3); // z++   z= z+1;
//         return z
//     }

// console.log(f2(3));


// function f1(z) {
//     z = (z++, z * 3); // z++   z= z+1;
//         return (console.log(z), z)
//     }

// console.log(f1(3));

// function f0(z) {
//         return (z = z * 5, console.log(z), z)
//     }

// console.log(f0(5));

// #30 async await
// https://www.youtube.com/watch?v=xXBTwb7cc88&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE
// function f1 () {
//   console.log(1);
// }


// function f2 () {
//   console.log(2);
// }


// function f3 () {
//   console.log(3);
// }

// f1();
// f2();
// f3();

// #31 валидация пароля для поржать
// https://www.youtube.com/watch?v=Ie7VMD1tt5Q&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE
// function validatePassword(str) {
//   if (typeof str !== 'string') {
//       return [false, 'Error in validatePassword'];
//   }
//   if (str.length < 8) {
//       return [false, 'Password must have at least 8 characters'];
//   }
//   if (str.search(/[a-z]/) === -1) {
//       return [false, 'Password must contain at least one lower case letter'];
//   }
//   if (str.search(/[A-Z]/) === -1) {
//       return [false, 'Password must contain at least one upper case letter'];
//   }
//   if (str.search(/[0123456789]/) === -1) {
//       return [false, 'Password must contain at least one digit'];
//   }
//   if (str.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) === -1) {
//       return [false, 'Password must contain at least one symbol'];
//   }
//   // Temporarily removed
//   // if (str.search(/[𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀈𓀉𓀊𓀋𓀌𓀍𓀎𓀏𓀐𓀑𓀒𓀓𓀔𓀞𓀟𓀠𓀡𓀢𓀣𓀤𓀥𓀦𓀧𓀨𓀩𓀪𓀫𓀬]/) === -1) {
//   //     return [false, 'Password must contain at least one Egyptian hieroglyph'];
//   // }
//   if (str.search(/\s/) !== -1) {
//       return [false, 'Password may not contain spaces'];
//   }
//   return [true];
// }

// #32 частичное применение и замыкание в функциях
// let multThenAdd = num => mul => add => num * mul + add;
// console.log('multThenAdd', multThenAdd(2)(3)(5)); // =2*3+5=11

// // №33 замыкание для сложных и больших функций
// // Для сохранения значений переменных в процессе работы и что-бы не загаживать глобальную область видимости

// function closure() {
//   let count = 0;
//   function main() {
//     console.log('count=', count);
//     count++;
//   }
//   return function () {
//     return main()
//   }
// }

// let variableClosure = closure();
// variableClosure();//count= 0
// variableClosure();//count= 1
// variableClosure();//count= 2

// Можно еще проще, если функция простая и маленькая
// function closure() {
//   let count = 0;
//   return function () {
//     console.log('count=', count);
//     count++;
//   }
// }

// let variableClosure = closure();
// variableClosure();//count= 0
// variableClosure();//count= 1
// variableClosure();//count= 2

// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// function makeFunc(n) {
//   let count = 0;

//   function main(n) {
//     count++;
//     count += n;
//     console.log('count makeFunc=', count);
//   }
//   return (n) => main(n)
// }

// let myFunc1 = makeFunc();
// let myFunc2 = makeFunc();
// myFunc1(5);
// myFunc1(1);
// myFunc1(2);

// #33 Тест поиска индекса во вложенном массиве

// let arr = [['4543543', '0000'], ['111111', '0000'], ['222222', '0000'], ['33333', '0000']];

// function indexOfTwoDimens(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i][0]);
//     if (arr[i][0] === value) return i
//   }
//   return -1
// }
// // let index = indexOfTwoDimens2(arr, '222222');
// // console.log('index=', index);

// console.log('indexOfTwoDimens=', indexOfTwoDimens(arr, '1222222'));


// TEST

// function indexOfTwoDimens(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i][0]);
//     if (arr[i][0] === value) return i
//   }
//   return -1
// }

// let allOrderbookBay = [['0.6255000000', '820.270000']
//   , ['0.6253400000', '670.470000']
//   , ['0.6250000000', '5312.290000']
//   , ['0.6220000000', '4066.240000']
//   , ['0.6210000000', '1265.730000']
//   , ['0.6205800000', '452.500000']
//   , ['0.6199700000', '294.030000']
//   , ['0.6182300000', '305.480000']
//   , ['0.6166300000', '990.560000']
//   , ['0.6149500000', '428.650000']];

// let initialBith = {
//   // messageObj:data:{b:[[ '0.4600700000', '3347.810000' ]]}
//   messageObj: { data: { b: [['0.6210000000', '0.100000']] } }
// }

// console.log(initialBith.messageObj.data.b);
// console.log('allOrderbookBay.length=', allOrderbookBay.length);

// function orderbookChange(allOrderbook, newMessage, BayOrSell) {
//   const index = indexOfTwoDimens(allOrderbook, newMessage[0][0]);
//   console.log('index=', index);
//   if (index >= 0) {
//     //  удалить из массива этот элемент
//     if (newMessage[0][1] === '0.000000') return allOrderbook.splice(index, 1);
//     // заменить новым значением
//     return allOrderbook[index][1] = newMessage[0][1];
//   }
//   // // Если элемент не найден, то добавить в массив и упорядочить по убыванию
//   allOrderbook.push(newMessage[0]);
//   if (BayOrSell) return allOrderbook.sort((a, b) => { return Number(b[0]) - Number(a[0]) })
//   allOrderbook.sort((a, b) => { return Number(a[0]) - Number(b[0]) });
// }
// orderbookChange(allOrderbookBay, initialBith.messageObj.data.b, false);
// for (let i = 0; i < allOrderbookBay.length; i++) {
//   console.log(`allOrderbookBay[${i}]=`, allOrderbookBay[i]);
//   // if (arr[i][0] === value) return i
// }

// Gate

// function orderbookChange(allOrderbook, newMessage, BayOrSell) {
//   const index = indexOfTwoDimens(allOrderbook, newMessage[0][0]);
//   console.log('index=', index);
//   if (index >= 0) {
//     //  удалить из массива этот элемент
//     if (newMessage[0][1] === '0.000000') return allOrderbook.splice(index, 1);
//     // заменить новым значением
//     return allOrderbook[index][1] = newMessage[0][1];
//   }
//   // // Если элемент не найден, то добавить в массив и упорядочить по убыванию
//   allOrderbook.push(newMessage[0]);
//   if (BayOrSell) return allOrderbook.sort((a, b) => { return Number(b[0]) - Number(a[0]) })
//   allOrderbook.sort((a, b) => { return Number(a[0]) - Number(b[0]) });
// }
// orderbookChange(allOrderbookBay, initialBith.messageObj.data.b, false);

// for (let i = 0; i < allOrderbookBay.length; i++) {
//   console.log(`allOrderbookBay[${i}]=`, allOrderbookBay[i]);
//   // if (arr[i][0] === value) return i
// }

// function changeFirstOrderbook(Orderbook, OrderbookNow) {
//   if (Orderbook[0][0] == OrderbookNow[0][0] && Orderbook[0][1] == OrderbookNow[0][1]) return false
//   Orderbook = OrderbookNow[0].slice();
//   return true
// }
// -----------------------------------------------------
// function changeFirstOrderbook(Orderbook, OrderbookNow) {
//   // console.log('Orderbook[0]=', Orderbook[0]);
//   // console.log('OrderbookNow[0]=', OrderbookNow[0]);
//   // if (Orderbook[0][0] == OrderbookNow[0][0] && Orderbook[0][1] == OrderbookNow[0][1]) return false
//   // Orderbook[0] = OrderbookNow[0].slice();
//   // console.log('Orderbook[0] 2=', Orderbook[0]);
//   // return true



//   console.log('Orderbook=', Orderbook);
//   console.log('OrderbookNow[0]=', OrderbookNow[0]);
//   if (Orderbook[0] == OrderbookNow[0][0] && Orderbook[1] == OrderbookNow[0][1]) return false
//   Orderbook[0] = OrderbookNow[0][0];
//   Orderbook[1] = OrderbookNow[0][1];
//   console.log('Orderbook 2=', Orderbook);
//   return true
// }

// let OrderbookNow = [['0.6355000000', '820.270000']
//   , ['0.6253400000', '670.470000']
//   , ['0.6250000000', '5312.290000']
//   , ['0.6220000000', '4066.240000']
//   , ['0.6210000000', '1265.730000']
//   , ['0.6205800000', '452.500000']
//   , ['0.6199700000', '294.030000']
//   , ['0.6182300000', '305.480000']
//   , ['0.6166300000', '990.560000']
//   , ['0.6149500000', '428.650000']];

// let orderbookFirstPreviousBay = [];
// let orderbookFirstPreviousBay = ['0.6355000000', '820.270000'];
// let orderbookFirstPreviousBay = ['0.5248400000', '548.390000'];
// orderbookFirstPreviousBay.push(['0.5248400000', '548.390000']);
// orderbookFirstPreviousBay.push(['0.6355000000', '820.270000']);

// orderbookFirstPreviousBay = allOrderbookBay[0].slice();
// console.log('orderbookFirstPreviousBay 1=', orderbookFirstPreviousBay);
// console.log('changeFirstOrderbook()', changeFirstOrderbook(orderbookFirstPreviousBay, OrderbookNow
// ));
// console.log('changeFirstOrderbook()', changeFirstOrderbook(orderbookFirstPreviousBay, OrderbookNow
// ));

// console.log('Orderbook[0]=', allOrderbookBay[0]);

// console.log('allOrderbookBay=', allOrderbookBay);



// console.log('orderbookFirstPreviousBay= 2', orderbookFirstPreviousBay);

// #34 function declaration
// https://www.youtube.com/watch?v=2paWsAFc7_8
// function declaration можно вызывать до момента объявления
// f1();

// function f1() {
//   console.log('function declaration');
// }
// f1();
// if (true) {
//   function f1() {
//     console.log('function 1');
//   }
// } else {
//   function f2() {
//     console.log('function 2');
//   }
// }
// f1(); // В строгом режиме даже так нельзя функцию вызвать

// function expression
//  function expression нельзя вызывать до момента объявления

// function f2() {
//   console.log('function 2');
// }

// f2();

// const f3 = function () {
//   console.log('function 3');
// };
//  Правила хорошего тона чаще ставят точку с запятой после объявления- это выраженеи присвоения
// f3();


// const f4 = f3;

// console.log(f4 === f3);

// const f5 = function example() {
//   console.log('function example');
// }

// f5();
// example(); // не работает так ! ошибка
//  но если сделать последовательно

// function example() {
//   console.log('function example');
// }

// const f5 = example;

// f5();
// example();
// console.log(f5 === example) // true
//  Выполняются обе функции

// const f5 = function example() {
//   console.log(f5.name);
//   console.log(example.name);
//   console.log(this.name);//undefine
//   console.log('function example');
// }

// f5();


// #34.1 setinterval старт и стоп
// Тест запуска, остановки setinterval и опять его же запустить снова
// var timer;
// function goAhead() {
//   timer = setInterval(function () {
//     console.log("GO");
//   }, 1000);
// }

// function stopThisMadnes() {
//   clearInterval(timer);
//   goAhead();
// }
//  запуск через секунду, останов через 30 секунд и повторный запускспустя 10 секунд
// let counter = 0;
// let counterSetInterval = 0;
// let ping;

// function startPing() {
//   ping = setInterval(function () {
//     counterSetInterval++;
//     console.log('counterSetInterval=', counterSetInterval);
//   }, 2000);
// }

// function stopPing() {
//   clearInterval(ping);
// }

// setInterval(() => {
//   counter++;
//   console.log('counter=', counter);
//   console.log('counterSetInterval=', counterSetInterval);
// }, 1000);

// setTimeout(() => {
//   console.log('End setTimeout');
//   stopPing();
// }, 30000);

// setTimeout(() => {
//   console.log('Start');
//   startPing();
// }, 1000);

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   startPing();
// }, 40000);


// #100 получилось запускать только один экземпляр таймера при многократном запуске функции. и ее останов
// let ping;
// function startPing(time) {
//   clearInterval(ping);
//   ping = setInterval(function () {
//     // ws.send(JSON.stringify({ "cmd": "ping" }));
//     let timeNaw = new Date().getTime();
//     console.log('time ping bith======================================', timeNaw);
//   }, time);
// }

// function stopPing() {
//   clearInterval(ping);
//   console.log('stopPing');
// }


// stopPing();
// startPing(5000);
// startPing(5000);
// startPing(5000);
// startPing(5000);
// startPing(5000);
////


// Без разницы сколько раз вызывать функцию startPing(5000) будет только один таймер без его копий
// если сразу запустить stopPing() ошибки не будет


// Тест return в if выводит из всей функции, а не тоько из самого if

// Тест reconnectBith() проекта criptoarbit

// function reconnectBithClosure() {
//   let count = 0;
//   let timeoutHandle;
//   let flag = false;

//   function start() {
//     timeoutHandle = setTimeout(function () {
//       console.log('Reconnect setTimeout');
//       count = 0;
//       // return ws.reconnect(1006, 'Reconnect error');
//     }, 5000);
//   }

//   function stop() {
//     clearTimeout(timeoutHandle);
//   }

//   function startReconnect() {
//     count++;
//     console.log('function  count=', count);
//     if (count > 3) {
//       if (!flag) {
//         flag = true;
//         start();
//         console.log('start time');
//       }
//       stop();
//       start();
//     }
//   }
//   return function () {
//     return startReconnect();
//   }
// }

// let reconnectBith = reconnectBithClosure();

// setInterval(() => {
//   console.log('1 Tick setInterval 1 sec');
//   // console.log('count=', count);

//   // reconnectBith();
// }, 1000)

// setInterval(() => {
//   console.log('2 Tick setInterval 6 sec')
//   reconnectBith();
// }, 4000)

// #35 Визуальная оптимизация кода
// const userRole = 'guest';

// if (userRole === 'guest' || userRole === 'manager' || userRole === 'car') {
//   console.log('можно!');
// }
// // vs

// const roles = ['guest', 'manager', 'car'];
// if (roles.includes(userRole)) {
//   console.log('можно!');
// }

// // #36 тест поддержуи чисел вида 1000_000_0000

// let number = 1000_000_0000;
// console.log('number 1000_000_1000=', number);

// let timeStart = undefined;
// // let timeEnd = new Date().getTime();
// let start = false;
// for (let i = 0; i < 5; i++) {
//   console.log('start=', start);

//   if (!start) {
//     timeStart = new Date().getTime();
//     start = true;
//   }
// }

// // let timeAllPing = timeEnd - timeStart;

// console.log('timeStart=', timeStart);

// #37 Задачи на собеседование
// https://www.youtube.com/watch?v=YJAwrYCduiI&t=483s

// Task 1
// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы в .out-1, которые меньше 5.
// console.log('========= Task 1 =====================');
// const a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// const f1 = () => {
//   // в лоб
//   let out = '';
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 5) out += a[i] + ' ';
//   }
//   console.log(out);
// }
// f1();

// const f1_2 = () => {
//   // через массив
//   let res = a.filter(item => item < 5);
//   console.log(res);
// }
// f1_2();

// // Задача 2
// // Даны списки:
// // a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// // b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// // Нужно вернуть список, который состоит из элементов, общих для этих двух списков.
// console.log('========= Task 2 =====================');
// const a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// const b2 = [1, 7, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// const f2 = () => {
//   // в лоб
//   // ! Коллизия
//   let res = [];
//   for (let i = 0; i < a2.length; i++) {
//     if (b2.includes(a2[i])) res.push(a2[i]);
//   }
//   return res;
// }
// console.log(f2());

// const f2_2 = () => {
//   // в лоб
//   // ! Коллизия
//   let res = a2.filter(item => b2.includes(item));
//   return res;
// }
// console.log(f2_2());

// // Задача 3
// // Отсортируйте словарь по значению в порядке возрастания и убывания.
// // d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
// console.log('========= Task 3 =====================');
// let d3 = {
//   1: 22,
//   3: 4,
//   4: 3,
//   2: 1,
//   0: 0,
//   9: 9
// }
// // console.log(d3); // готово
// // for (let key in d3) {
// //     console.log(d3[key]);
// // }

// function ascFunc(a, b) {
//   return a - b;
// }

// function descFunc(a, b) {
//   return b - a;
// }

// const f3 = (obj, type = 'asc') => {
//   let val = Object.values(obj);
//   if (type === 'asc') return val.sort(ascFunc);
//   if (type === 'desc') return val.sort(descFunc);
// }

// console.log(f3(d3, 'asc'));
// console.log(f3(d3, 'desc'));

// // Задача 4
// // Напишите программу для слияния нескольких словарей в один.
// // Допустим, вот наши словари:
// console.log('========= Task 4 =====================');

// const a4 = { 1: 10, 2: 20 }
// const b4 = { 3: 30, 4: 40 }
// const c4 = { 5: 50, 6: 60 }

// const obj4 = Object.assign({}, a4, b4, c4);
// console.log(obj4);


// // Задача 5
// // Напишите код, который переводит целое число в строку
// console.log('========= Task 5 =====================');

// const a5 = 456;
// const res5 = a5.toString()
// console.log(res5);
// console.log(typeof res5);

// // Задача 6
// // Напишите проверку на то, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.
// console.log('========= Task 6 =====================');

// const a6 = 'abba1';
// const f6 = str => {
//   return str === str.split('').reverse().join('');
// }

// console.log(f6(a6));

// // Задача 7
// // Выведите первый и последний элемент списка.
// console.log('========= Task 7 =====================');

// const a7 = [1, 2, 3, 4, 5];
// console.log(a7[0], a7[a7.length - 1]);

// // Задача 8
// // Напишите программу, которая принимает имя файла и выводит его расширение. Если расширение у файла определить невозможно, выбросите исключение.
// console.log('========= Task 8 =====================');
// const filename = 'only_adult_video.mp4';

// const f8 = filename => {
//   let res = filename.split('.').pop();
//   if (res !== filename) return res;
//   throw new UserException("Extension not found");
// }
// console.log(f8(filename));

// // Задача 9
// // Напишите программу, которая выводит чётные числа из заданного списка и останавливается, если встречает число 237.
// console.log('========= Task 9 =====================');
// const a9 = [
//   386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
//   399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
// ];

// const f9 = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 237) return;
//     if (arr[i] % 2 === 0) console.log(arr[i]);
//   }
// }

// // f9(a9);

// // Задача 10
// // Напишите программу, которая принимает два списка и выводит все элементы первого, которых нет во втором.
// console.log('========= Task 10 =====================');

// const a10 = ['White', 'Black', 'Red'];
// const b10 = ['Red', 'Green'];

// const f10 = (ar1, ar2) => {
//   return ar1.filter(item => !ar2.includes(item));
// }

// console.log(f10(a10, b10));


// // Задача 11
// // Сложите цифры целого числа.
// console.log('========= Task 11 =====================');
// const a11 = 8947;
// let res11 = a11.toString().split('').reduce((accum, item) => { return accum += +item }, 0);
// console.log(res11);

// // Задача 12
// // Посчитайте, сколько раз символ встречается в строке.
// console.log('========= Task 12 =====================');

// const s12 = 'z';
// const str12 = 'azazabrazzaza';

// const f12 = (str, s) => {
//   let index = str.indexOf(s);
//   let count = 0;
//   while (index !== -1) {
//     count++;
//     index = str.indexOf(s, index + 1);
//   }
//   return count;
// }

// console.log(f12(str12, s12));


// // Задача 13
// // Нужно проверить, все ли числа в последовательности уникальны.
// console.log('========= Task 13 =====================');
// const a13 = [1, 2, 3, 4, 5, 6, 7];

// let s13 = new Set(a13);
// console.log(a13.length === s13.size);


//  #38 reverse() реверс - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]


//  #39 Визуальная оптимизация кода +
// const param_1 = 1;
// const param_2 = 2;
// const param_3 = 3;
// const param_4 = 0;


// const arrPrice = [param_1, param_2, param_3, param_4];
// if (arrPrice.includes(0)) {
//   console.log('есть');
// } else {
//   console.log('нет');

// }

// если данные устарели все 4 times
//1629570661475


// const TIME_DEPRECAT_ALL = 20000;
// const arrTimesAll = [1629570642474, 1629570638474, 1629570643475, undefined];
// let paramsGoTrade = {};
// paramsGoTrade.timeServer = 1629570660475;
// // // const arrTimesAll = [paramsGoTrade.timeGateSell, paramsGoTrade.timeGateBay, paramsGoTrade.timeBithSell, paramsGoTrade.timeBithBay];
// console.log('Проверка 4 times')
// const timeOutAll = arrTimesAll.some((item) => {
//   if (paramsGoTrade.timeServer - item > TIME_DEPRECAT_ALL) {
//     console.log('Прошло 20 сек');
//     return true
//   }
// });
// console.log('timeOutAll=', timeOutAll);
// if (timeOutAll) return console.log('timeOutAll return')


// // console.log('Не прошло 20 сек');
// const time = new Date().getTime();
// console.log('time:', typeof time);
// console.log('undefined:', 1629570660475 - undefined);
// console.log('undefined2:', 1629570660475 - undefined > TIME_DEPRECAT_ALL);
// console.log('not property object:', paramsGoTrade.something); //undefined


// #T1 проверка возможности выходы return из вложенной функции. походу передать внешний return в  внутренню функцию через this не получится

// console.log('#T1 ########################################')
// function nestedReturn() {
//   let arr = [0, 1, 2, 3, 4, 5];
//   for (i = 0; i < arr.length; i++) {
//     console.log(i);
//     // console.log(typeof this);
//     if (i === 3) return this
//   }
// }

// function external() {
//   let context = 'context';
//   // this.context = 'context';
//   let func = nestedReturn.bind(context);
//   for (let i = 0; i < 3; i++) {
//     console.log(func());
//   }
// }

// external();

// console.log('#T2 ########################################')

// function tetsReturn() {
//   let ret = this.return;
//   for (let i = 0; i < 5; i++) {
//     // let ret = this.return
//     console.log(i);
//     if (i === 2) ret
//   }
// }

// test среднего значения

// Number.prototype.round = function (places) {
//   return +(Math.round(this + "e+" + places) + "e-" + places);
// }

// // let initialBith = { arrChart: { b: [11.32746387427, 20, 20, 40] } };
// let initialBith = { arrChart: { b: [11.32746387427, 12, 13, 12] } };
// let b = initialBith.arrChart.b;
// let sum = b.reduce((accum, item) => {
//   accum += item;
//   return accum;
// });
// let average = sum / b.length;
// let averageRound = average.round(8);//округляем
// let max = Math.max(...b);
// let min = Math.min(...b);
// // отклонение max - min от среднего на 3%
// console.log('((max - min) / averageRound)=', (max - min) / averageRound);
// let flag = (max - min) / averageRound > 0.3 ? true : false;
// console.log('sum=', sum);
// console.log('average=', average);
// console.log('averageRound=', averageRound);
// console.log('max=', max);
// console.log('min=', min);
// console.log('flag=', flag);

// Тест посика индексов в массиве sell, bay с самими большими отклонениями для testqueezebith

// const arrB = [1.19, 1.19, 1.22, 1.19, 1.13, 1.18, 1.19, 1.22, 1.18, 1.17, 1.17, 1.10, 1.17, 1.17, 1.17];
const arrB = [1.19, 1.19, 1.19, 1.19, 1.19, 1.30, 1.19, 1.19, 1.19, 1.19, 1.19, 1.19, 1.19, 1.19, 1.19];

// //#12.5 reduce сумма положительных чисел работает
// let a = [-3, 4, -5, 7, -6, 2];
// let b = a.reduce( (accum, item) => {
//  if (item > 0) {
//   accum += item
//  }
//   return accum;
// }, 0); // Начальное значение аккумулятора 0

// в arrB находим наибольшоую разницу в сторону возростания
// function diffMaxIndex(obj, arrDiffMaxIndex) { // true = sell, false = bay
//   let diffMax = obj.arr.reduce((accum, item, index, arr) => {
//     let preIndex = 0;
//     preIndex = index - 1;
//     if (preIndex < 2) return accum
//     if (arrDiffMaxIndex.includes(preIndex)) return accum
//     let diff = item - arr[preIndex];
//     if (obj.sell) diff = -diff;
//     if (diff > accum.diff) {
//       accum.diff = diff;
//       accum.index = preIndex;
//       return accum
//     }
//     return accum
//   }, { diff: 0, index: 0 }); // Начальное значение аккумулятора 0
//   return diffMax.index
// }

// function diffMaxIndexS(obj) {
//   //obj = { arr: arr, sell: true }
//   let arrDiffMaxIndex = [];

//   for (let i = 0; i < 3; i++) {
//     const resDiff = diffMaxIndex(obj, arrDiffMaxIndex);
//     resDiff != 0 ? arrDiffMaxIndex.push(resDiff) : false
//   }

//   return arrDiffMaxIndex
// }

// console.log('diffMaxIndexS({ arr: arrB, sell: false })=', diffMaxIndexS({ arr: arrB, sell: false }));
// console.log('diffMaxIndexS({ arr: arrB, sell: true })=', diffMaxIndexS({ arr: arrB, sell: true }));


// // среднее значение чисел average
// Number.prototype.round = function (places) {
//   return +(Math.round(this + "e+" + places) + "e-" + places);
// }

// function average(arr) {
//   const sum = arr.reduce((accum, item) => accum += item);
//   const average = sum / arr.length;
//   // const averageRound = average.round(1);//округляем
//   const averageRound = Math.round(average);
//   return averageRound
// }

// console.log('average=', average([2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5]));


// console.log('Math.round(2,77)=', Math.round(2.49));


// // еще один способ прохода массива

// const tags = ['one', 'two', 'tree'];
// let html = '<h2> other</h2>';

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// console.log('html=', html);


// тест оборачивания переменной в объект и вывод строкового названия переменной вместе с значением переменной

// не все равно не получается
// (function () {
//   var getVarName = function tmp() {
//     let n = /getVarName\(([^)]+?)\)/.exec(tmp.caller !== null ? tmp.caller.toString() : '');

//     return n !== null ? n[1] : false;
//   }

//   let myVarName123456 = 1;
//   let myVarName2 = 2;
//   console.info(getVarName(myVarName123456)); // myVarName123456
//   console.info(getVarName(myVarName2)); // myVarName123456
// }());

// Работает такой вариант
// const countReconnect = 1;
// const countReconnectCode0 = 2;
// const countErrors = 3;
// // let arrVar = ['countReconnect', 'countReconnectCode0', 'countErrors']
// // function consoleGroupLog(arrVar) { arrVar.forEach((item) => console.log(`${item} =`, eval(item))) }
// // consoleGroupLog(arrVar);

// // если переменные вставлять в объекты как свойства объекта
// // но тогда добрать до переменной сложнее obj.countReconnect вместо просто countReconnect
// let obj = { countReconnect, countReconnectCode0, countErrors };
// function consoleGroupLog(obj) { for (let key in obj) console.log(`${key} = `, obj[key]) }
// consoleGroupLog(obj);
// consoleGroupLogObj([obj.countReconnect, obj.countReconnectCode0]);


// удаление пробельных символов для устранения неприятнго эффекта VSCode в шаблонных строках - форматирование пробелов остается в шаблонных строках когда  автоформатирует VSCode возможно, Eslint

// const tetsConsoleLog = `initialBith.takerComissions =
//           initialBith.makerComissions =
//           initialBith.initialFetchURL= true
// `;
// function consoleLogGroup(str) {
//   console.log(str.split('\n').map((item) => item.trim()).join('\n'));
// }
// console.log('console.log = ', tetsConsoleLog);
// consoleLogGroup(tetsConsoleLog);


// var person = 'Mike';
// var age = 28;

// function myTag(strings, personExp, ageExp) {
//   var str0 = strings[0]; // "That "
//   var str1 = strings[1]; // " is a "

//   // Технически, в конце итогового выражения
//   // (в нашем примере) есть ещё одна строка,
//   // но она пустая (""), так что пропустим её.
//   // var str2 = strings[2];

//   var ageStr;
//   if (ageExp > 99) {
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   // Мы даже можем вернуть строку, построенную другим шаблонным литералом
//   return `${str0}${personExp}${str1}${ageStr}`;
// }

// var output = myTag`That ${person} is a ${age}`;

// console.log(output);
// That Mike is a youngster

// функция тест тегового шаблона расширения шаблонной строки

// // function testTag(strings, ...keys) {
// function testTag(...values) {

//   // console.log('strings[0]=', strings[0]);
//   // console.log('strings[1]=', strings[1]);
//   // console.log('strings[2]=', strings[2]);
//   // keys.forEach((key, index) => {
//   //   console.log(`key[${index}]=`, key);
//   // })
//   // values.forEach((key, index) => {
//   //   console.log(key);
//   // })
//   console.log(values);
// }
// initialGate = {
//   messageObj:
//   {
//     time: 1631785575,
//     channel: 'spot.order_book',
//     event: 'update',
//     result: {
//       t: 1631785575531,
//       lastUpdateId: 2088519752,
//       s: 'XRP_USDT',
//       bids: [
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array]
//       ],
//       asks: [
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array],
//         [Array], [Array]
//       ]
//     }
//   }
// }
// //// const strMessageGate = `onmessage Gate
// ////     initialGate.messageObj.time = ${initialGate.messageObj.time}
// ////     initialGate.messageObj = ${initialGate.messageObj}`;
// testTag`onmessage Gate
// initialGate.messageObj.time = ${initialGate.messageObj.time}
// initialGate.messageObj = ${initialGate.messageObj}`

// function bold(strings, ...expressions) {
//   let finalString = ''

//   // Проходимся по всем выражениям
//   expressions.forEach((value, i) => {
//     finalString += `${strings[i]}<strong>${value}</strong>`
//   })

//   // Добавляем последний строковой литерал
//   finalString += strings[strings.length - 1]

//   return finalString
// }

// const string = bold`This is a string with ${true} and ${false} and ${100} interpolated inside.`

// console.log(string)


// function testTag(strings, ...expressions) {
//   let finalString = ''
//   strings.forEach((string) => {
//     console.log(string)
//   })
//   console.log('array strings=', strings);
//   console.log('expressions.length=', expressions.length);
//   // Проходимся по всем выражениям
//   console.log('*************************');
//   const equals = strings.length === expressions.length ? true : false;
//   expressions.forEach((value, i) => {
//     if (equals) {
//       console.log(strings[i], value);
//     } else {
//       console.log(strings[i], value, strings[strings.length - 1]); // Добавляем последний строковой литерал
//     }
//   })
// }

// function testTag(strings, ...expressions) {
//   const equals = strings.length != expressions.length ? true : false;
//   expressions.forEach((value, i) => {
//     if (equals) console.log(strings[i], value)
//     else console.log(strings[i], value, strings[strings.length - 1]); // Добавляем последний строковой литерал
//   })
// }



// testTag`wewqeqw${initialGate.messageObj.time}${initialGate.messageObj.time}onmessage Gate
// initialGate.messageObj.time = ${initialGate.messageObj.time}
// initialGate.messageObj = ${initialGate.messageObj}
// initialGate.messageObj.result = ${initialGate.messageObj.result}ewewewe`


// тест инкапсуляции тегового шаблона- функции не работает и нашел ответ
// https://coderoad.ru/58316788/%D0%9A%D0%B0%D0%BA-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D0%BB-%D0%B2-es6-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9
// console.log('___________________________________');
// function tags(str) {
//   function tag(strings, ...expressions) {
//     console.log('strings=', strings);
//     console.log('expressions=', expressions);
//   }

//   tag`${str}`
// }

// const strMessageGate = `onmessage Gate
// initialGate.messageObj.time = ${initialGate.messageObj.time}
// initialGate.messageObj = ${initialGate.messageObj}`;

// // console.log('strMessageGate=', tags(strMessageGate));
// tags(strMessageGate)

// arr.forEach можно игнорировать определенные элементы в массиве
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   if (item === 3) return
//   console.log(item);
// })

// const tetsConsoleLog = `initialBith.takerComissions =
//           initialBith.makerComissions =
//           initialBith.initialFetchURL= true
// `;
// function consoleLogGroup(str) {
//   console.log(str.split('\n').map((item) => item.trim()).join('\n'));
// }
// console.log('console.log = ', tetsConsoleLog);
// consoleLogGroup(tetsConsoleLog);


// function consoleLogGroup(strings, ...expressions) {
//   console.log(strings);
//   function trimMy(str) { return str.split('\n').map((item) => item.trim()).join('\n') }
//   // const equals = strings.length != expressions.length ? true : false;
//   // console.log(strings[strings.length - 1].split('\n').map((item) => item.trim()).join('\n'));

//   expressions.forEach((value, i) => {
//     if (i === expressions.length - 1) {
//       console.log(trimMy(strings[i]), value, trimMy(strings[strings.length - 1]));
//       console.log('TEST')
//     }
//     else console.log(trimMy(strings[i]), value); // Добавляем последний строковой литерал
//   })
// }

var util = require('util');
const { match } = require('assert');

// function consoleLogGroup(strings, ...expressions) {
//   let strOut = '';
//   console.log(strings);
//   function trimMy(str) { return str.split('\n').map((item) => item.trim()).join('\n') }
//   // const equals = strings.length != expressions.length ? true : false;
//   // console.log(strings[strings.length - 1].split('\n').map((item) => item.trim()).join('\n'));
//   console.log('^^^^^^^^^^^^^^^^^^^^^^');
//   expressions.forEach((value, i) => {
//     if (i === expressions.length - 1) {
//       // strOut += util.format(trimMy(strings[i]), value, trimMy(strings[strings.length - 1]));
//       // console.log('TEST')
//     }
//     else strOut += util.format((trimMy(strings[i]), value)); // Добавляем последний строковой литерал
//   })
//   console.log(strOut);
// }

// console.log('_______________________________');
// consoleLogGroup`TEST_ORDERBOOB10
//         ${initialGate.messageObj.time}onmessage Gate
//         initialGate.messageObj.time = ${initialGate.messageObj.time}
//         initialGate.messageObj = ${initialGate.messageObj}
//         initialGate.messageObj.result =${initialGate.messageObj.time}
//         |Time OUT 5 min test`;

// console.log(`TEST_ORDERBOOB10
//         ${initialGate.messageObj.time}onmessage Gate
//         initialGate.messageObj.time = ${initialGate.messageObj.time}
//         initialGate.messageObj = ${initialGate.messageObj}
//         initialGate.messageObj.result =${initialGate.messageObj.time}
//         |Time OUT 5 min test`);
// console.log('TEST_ORDERBOOB10')
// console.log(initialGate.messageObj.time, 'onmessage Gate');
// console.log(initialGate.messageObj.time, initialGate.messageObj.time);
// console.log(initialGate.messageObj, initialGate.messageObj);
// console.log(initialGate.messageObj.result, initialGate.messageObj.time);
// console.log('| Time OUT 5 min test');

// const countReconnect = 1;
// const countReconnectCode0 = 2;
// const countErrors = 3;
// const TIME_STOP_TEST = 50;
// let obj = { countReconnect, countReconnectCode0, countErrors };

// consoleLogGroup`countReconnect = ${obj.countReconnect}
//         countErrors = ${obj.countErrors}
//         |Time OUT sec stop = ${TIME_STOP_TEST}`;

// var util = require('util');

// var obj3 = {
//   a: 5,
//   b: 6,
//   // inspect: function () {
//   //   return 123;
//   // }
// };
// // obj3.self = obj3;

// console.log(util.inspect(obj3));


// consoleLog = function (msg) {
//   process.stdout.write(`${msg}\n`);
// };

// consoleLog(`TEST_ORDERBOOB10
//   ${initialGate.messageObj.time}onmessage Gate
//   initialGate.messageObj.time = ${initialGate.messageObj.time}
//   initialGate.messageObj = ${initialGate.messageObj}
//   initialGate.messageObj.result =${initialGate.messageObj.time}
//   |Time OUT 5 min test`);

// function consoleLogGroup2(strings, ...expressions) {
//   const inspectOptions = { showHidden: false, colors: true, depth: null }// depth: null глубокий вывод. compact: true минимизация количества строк
//   let strOut = '';
//   function trim(str) { return str.split('\n').map((item) => item.trim()).join('\n') }//удаляем лишние пробелы для устранения эффекта форматирования шаблонных строк VSCode.
//   expressions.forEach((value, i) => {
//     if (i === expressions.length - 1) {
//       strOut += ' ' + trim(strings[i] +
//         util.formatWithOptions(inspectOptions, value) + ' ' +
//         trim(strings[strings.length - 1]))
//     }// Добавляем последний строковой литерал
//     else strOut += ' ' + trim(strings[i]) + ' ' + util.formatWithOptions(inspectOptions, value);
//   })
//   // console.log(util.formatWithOptions({ showHidden: false, colors: true }, expressions[3]));// depth: null глубокий вывод
//   // console.log(util.inspect(expressions[3], { showHidden: false, colors: true }))// depth: null глубокий вывод объектов и цветом
//   console.log(strOut);
// }

// function consoleLogGroup3(strings, ...expressions) {
//   const inspectOptions = { showHidden: false, colors: true }// depth: null глубокий вывод
//   let strOut = '';
//   function trim(str) { return str.split('\n').map((item) => item.trim()).join('\n') }//удаляем лишние пробелы для устранения эффекта форматирования шаблонных строк VSCode.
//   expressions.forEach((value, i) => {
//     if (i === expressions.length - 1) {
//       strOut += ' ' + trim(strings[i] +
//         util.formatWithOptions(inspectOptions, value) + ' ' +
//         trim(strings[strings.length - 1]))
//     }// Добавляем последний строковой литерал
//     else strOut += ' ' + trim(strings[i]) + ' ' + util.formatWithOptions(inspectOptions, value);
//   })
//   // console.log(util.formatWithOptions({ showHidden: false, colors: true }, expressions[3]));// depth: null глубокий вывод
//   // console.log(util.inspect(expressions[3], { showHidden: false, colors: true }))// depth: null глубокий вывод объектов и цветом
//   console.log(strOut);
//   console.log('-------------------------');

//   // console.log(JSON.stringify(expressions[3], null, 4));
//   console.log('connection : %j', expressions[3]);
// }

// consoleLogGroup2`TEST_ORDERBOOB10
//         ${initialGate.messageObj.time} ' onmessage Gate
//         ${ initialGate.messageObj.time}initialGate.messageObj.time = ${initialGate.messageObj.time}
//         initialGate.messageObj = ${ initialGate.messageObj}
//         initialGate.messageObj.result = ${ initialGate.messageObj.time}
//         | Time OUT 5 min test2`;
// consoleLogGroup3`TEST_ORDERBOOB10
//         ${eval(initialGate.messageObj.time)} ' onmessage Gate
//         ${ eval(initialGate.messageObj.time)}initialGate.messageObj.time = ${eval(initialGate.messageObj.time)}
//         initialGate.messageObj = ${ eval(initialGate.messageObj)}
//         initialGate.messageObj.result = ${ eval(initialGate.messageObj.time)}
//         | Time OUT 5 min test2`;
// function templateSrt(object) {
//   process.stdout.write(util.inspect(object) + '\n');
// }

// templateSrt(initialGate.messageObj);
// console.log('console.log:', util.formatWithOptions({ showHidden: true, colors: true, depth: null }, console));
// console.log('console.log:', util.formatWithOptions({ showHidden: true, colors: true, depth: null }, console));
// console.dir(console.log, { showHidden: true, depth: null });
// test Github editing

//closure exit more function on the object

// let timerPingClosure = function () {
//   let ping;
//   function startPing(time) {
//     stopPing()
//     ping = setInterval(function () {
//       // ws.send(JSON.stringify({ "cmd": "ping" }));
//       let timeNaw = new Date().getTime();
//       console.log('time ping bith start ======================================', timeNaw);
//     }, time);
//   }

//   function stopPing() {
//     clearInterval(ping);
//     let timeNaw = new Date().getTime();
//     // console.log('stopPing');
//     // console.log('time pong bith stop ======================================', timeNaw);
//   }

//   return {
//     startping: startPing,
//     stopping: stopPing
//   }
// };

// let timerPingOne = timerPingClosure();
// // let timerPingTwo = timerPingClosure();
// // timerPingOne.startping();
// // timerPingOne.startping();
// // // timerPingTwo.startping();
// // timerPingOne.stopping();
// // timerPingTwo.stopping();

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPingOne.startping(1000);
// }, 5000);

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPingOne.startping(5000);
// }, 7000);

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPingOne.stopping();
// }, 30000);
////////////////////////////////////////////////////////////////
// let one = 'websocket';
// let two = 'REST API';
// let tree = 'GRAPH API'
// const { timerClosure, funStartPing, funEndPing } = require('./functions');

// let funStart = () => {
//   let timeNaw = new Date().getTime();
//   console.log('This  funStart timeNaw =', timeNaw);
//   // console.log('ws=', ws);
//   // return ws
// };


// let timerConfigObj = {
//   period: 5000, funStart: funStartPing, funEnd: funEndPing,
//   funStartArguments: [one, two], funEndArguments: [tree]
// };

// let timerClosure = function (timerConfigObj) {
//   // let period = timerConfigObj.period;
//   // let funStart = timerConfigObj.funStart || function () { console.log('null function funStart') };
//   // let funEnd = timerConfigObj.funEnd || function () { console.log('null function funEnd') };

//   let id;
//   function start() {
//     stop()
//     id = setInterval(function () {
//       timerConfigObj.funStart(ws);
//     }, timerConfigObj.period);
//   }

//   function stop() {
//     clearInterval(id);
//     timerConfigObj.funEnd();
//   }

//   return { start, stop }
// };

// let timerPing = timerClosure(timerConfigObj);


// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPing.start();
// }, 5000);

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPing.start();
// }, 7000);

// setTimeout(() => {
//   console.log('Start  NewsetTimeout');
//   timerPing.stop();
// }, 30000);

// ////////////////////////////////////////
// Тест параметров объекта как аргументы функции

// function testObjArguments({ a, b, c = 0, d = 0 }) {
//   console.log('a =', a);
//   console.log('b =', b);
//   console.log('c =', c);
//   console.log('d =', d);
// }

// // objArguments = { a: 'a', b: 'b', c: 10, d: 20 };
// objArguments = { a: 'a', b: 'b' };

// testObjArguments(objArguments);
//////////////////////////////////////////////////////
// Счетчик-замыкание
// function closure(name) {
//   let count = 0;
//   function main(name) {
//     console.log(`${name} count=`, count);
//     count++;
//   }
//   return (name) => main(name)
// }

// let variableClosure = closure();
// let variableClosure2 = closure();
/////////////////////////////////////////////////////////////
// for reactcriptoarbitr_tets
// const fs = require("fs");
// const parse = require('csv-parse');
// let result = '';
// const CSVFilePath = "./csv/test2_profit_651_1631860141152.csv";
// function parseCSV() {

//   // fs.readFile("./csv/test_profit_12.csv", "utf8",
//   // fs.readFile("./csv/test_profit_12_copy.csv", "utf8",
//   fs.readFile(CSVFilePath, "utf8",
//     function (error, input) {
//       console.log("Асинхронное чтение файла");
//       if (error) throw error; // если возникла ошибка
//       // console.log('data file:', data);
//       parse(input, {
//         // comment: '#',
//         // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
//         // columns: true
//       }, function (err, output) {
//         if (err) throw err; // если возникла ошибка
//         console.log('output=', output);
//         result = output;
//         // return output
//         // assert.deepStrictEqual(
//         //   output,
//         //   [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
//         // )
//       });

//       // console.log('rapseResult=', rapseResult);
//       // return result
//     });
// }

// parseCSV();
///////////////////
// Самый лучший способ из получившихся
// const processFile = async () => {
//   let count = 0;
//   records = []
//   const parser = fs
//     // .createReadStream(`${__dirname}/fs_read.csv`)
//     .createReadStream(CSVFilePath)
//     .pipe(parse({
//       // CSV options if any
//       // comment: '#',
//       // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
//       // columns: true
//     }));
//   for await (const record of parser) {
//     // Work with each record
//     records.push(record);
//     if (count === 0) console.log('Names=', record);
//     count++;
//   }
//   return records
// }

// const processFile = async () => {
//   let count = 0;
//   dataObj = { number: [], bayGate: [], bayBith: [], sellGate: [], sellBith: [], diffSell: [], diffBay: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], bayOrSellGate: [], bayOrSellBith: [], init: [] };
//   records = [];
//   const parser = fs
//     // .createReadStream(`${__dirname}/fs_read.csv`)
//     .createReadStream(CSVFilePath)
//     .pipe(parse({
//       // CSV options if any
//       // comment: '#',
//       // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
//       // columns: true
//     }));
//   for await (const record of parser) {
//     // Work with each record
//     records.push(record);
//     if (count === 0) dataObj.names = record//console.log('Names=', record)
//     else {
//       // dataObj.number[count - 1] = record[0]; // можно и так
//       // dataObj.number.push(record[0]);
//       let countObj = 0;
//       Object.keys(dataObj).forEach(key => {
//         // elem[key]
//         if (key != 'names') dataObj[key].push(record[countObj]);
//         countObj++;
//       })
//     };

//     count++;
//   }
//   // const length = Object.keys(dataObj).length;
//   // console.log('length=', length); // 15
//   return dataObj//records
// }

// processFile()
//   // .then((result2) => { console.log('result2=', result2) })
//   .then((dataObj) => { console.log('dataObj=', dataObj) })
//   .catch(console.error)

/////////////////////////////////
//// Test State in othet companent React


// function once(fn, context) {
//   var result;

//   return function () {
//     if (fn) {
//       result = fn.apply(context || this, arguments);
//       fn = null;
//     }

//     return result;
//   };
// }

// // Пример использования
// var canOnlyFireOnce = once(function () {
//   console.log('Запущено!');
// });

// canOnlyFireOnce(); // "Запущено!"
// canOnlyFireOnce(); // Не запущено
// canOnlyFireOnce(); // Не запущено
/////////////////////////////////////////////
//// Последовательность асинхронных функций принимающие результат предыдущей функции
// async function computedAll(col) {
//   for (let i = 0; i < col; i++) {
//     await Math.trunc(Math.random * 20) * col;
//   }
// }
// async function computed(number) {
//   console.log('This computed1 Start ', number);
//   await computedAll(300_1000);
//   console.log('This computed1 End ', number);
//   return number + 1000;
// }

// async function computed2(number) {
//   console.log('This computed2 ', number);
//   await computedAll(1000);
//   return number;
// }
// // вариант #1
// // async function MyFetch(number) {
// //   let result1 = await computed(number);
// //   let result2 = await computed2(result1);
// //   return result2
// // }

// // вариант #2
// async function MyFetch(number) {
//   try {
//     let result1 = await computed(number);
//     let result2 = await computed2(result1);
//     console.log('result2()=', result2);
//   } catch (e) { console.log('ERROR', e) }
// }

// //// Работает вариант #1
// // MyFetch(1)
// //   .then((myFetch) => { console.log('myFetch()=', myFetch) })
// //   .catch((e) => console.log('ERROR', e))
// //

// //// Работает вариант #2
// MyFetch(1);
// //

// async function f() {
//   return await MyFetch().then((myFetch) => console.log('myFetch()=', myFetch))
// }
// // f();
// let result = f();
// console.log('result=', result);

//// используя синтаксис Promice
//Пример
// doSomething().then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Итоговый результат: ' + finalResult);
// })
// .catch(failureCallback);
//// С стрелочными функциями
// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => {
//   console.log(`Итоговый результат: ${finalResult}`);
// })
// .catch(failureCallback);
//// Работает
// computed(1)
//   .then(first => computed2(first))
//   .then((two) => console.log('two()=', two))
//   .catch((e) => console.log('ERROR', e))
/////


// async function asyncFunc1(param1) {
//   // return new Promise((resolve, reject) => { // (A)
//   //   setTimeout(() => resolve('param1' + param1), 1000); // (B)
//   // });
//   // async function asyncFunc1_1(param1) { return await setTimeout((param1) => resolve('param1' + param1), 1000) }

//   return fakeFetch('URL 1', param1)
// }

// async function asyncFunc2(param2) {
//   // return new Promise((resolve, reject) => { // (A)
//   //   setTimeout(() => resolve('DONE: ' + param2 + 'param2'), 150); // (B)
//   // });

//   // async function asyncFunc2_1(param1) { return await setTimeout((param2) => resolve('DONE: ' + param2 + 'param2'), 150) }

//   return fakeFetch('URL 2', param2)
// }

// async function main() {
//   const x = await asyncFunc1(3000); // (A)
//   const y = await asyncFunc2(1000); // (A)
//   console.log('Result x:  ' + x); // (B)
//   console.log('Result y:  ' + y); // (B)

//   // Same as:
//   // asyncFunc()
//   // .then(x => console.log('Result: '+x));
// }
// main();
//////////////////////////////
////Последовательный fetch и 5 способов решения
////https://habr.com/ru/post/490524/
// const urls = ['url1', 'url2', 'url3'];

function fakeFetch(url, params = 1000) {
  // этот вывод в консоль покажет порядок вызовов с их входящими параметрами
  console.log(`fakeFetch to: ${url} with params: ${params}`);
  return new Promise(resolve => {
    setTimeout(() => resolve(`${url} is DONE`), params);
  })
};
// reduce
// function reduceWay(callback) {
//   urls.reduce((accum, item) => {
//     return accum
//       .then(res => fakeFetch(item, res))
//   }, Promise.resolve())
//     .then(result => callback(result));
// }

// reduceWay(result => console.log(`result: ${result}`))
//async/await
// async function asyncAwaitWay(callback) {
//   let results;
//   for (const url of urls) {
//     results = await fakeFetch(url, results);
//   }
//   callback(result);
// }
// asyncAwaitWay(result => console.log(`result: ${result}`))
//реальные тесты
// function fakeFetch(url, params = '-') {
//   // этот вывод в консоль покажет порядок вызовов с их входящими параметрами
//   console.log(`fakeFetch to: ${url} with params: ${params}`);
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`${url} is DONE`), 1000);
//   })
// };


// async function asyncAwaitWay(callback) {
//   let results;
//   for (const url of urls) {
//     // results = await fakeFetch(url, results);
//     // postData('/api/message/getdircsv', {})
//     results = await postData(url, results);

//   }
//   callback(result);
// }

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// const urls = ['/api/message/getdircsv', '/api/message/loadfile'];

// asyncAwaitWay(result => console.log(`result: ${result}`))
//////////////////// НЕУЧИТЫВАЕТ ЕСЛИ НЕОБХОДИМО ПЕРЕДАВАТЬ ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ В ЗАПРОСАХ

// const fetch = require('node-fetch');
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   // console.log('response=', response);
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// async function getdircsv1() {
//   return await postData('https://reqbin.com/echo/post/json', {})
// }

// async function getdircsv2(result1) {
//   return await postData('https://vivazzi.pro/test-request/?json=true&par_1=foo&par_2=result1', {})
// }

// getdircsv1().then((result) => console.log('getdircsv1=', result));
// getdircsv2().then((result) => console.log('getdircsv2=', result));

// async function twoAsyncFunction() {
//   const funOne = await getdircsv1();
//   const funTwo = await getdircsv2();
//   // const result = funOne+funTwo;
//   // getdircsv2().then((result) => console.log('getdircsv2=', result));
//   return funTwo
// }

// twoAsyncFunction().then((result) => { console.log('twoAsyncFunction=', result) });

//////////////// тестирование сохранения ссылки на объект, а не перезапись ссылки новым одинаковым объектом


// const obj = { a: 2 };
// const objNew = { a: 2 };

// console.log('obj = objNew :', obj === objNew);
// Object.assign(obj, objNew);
// console.log('obj = objNew :', obj === objNew);


//// Promice.All

// const promise1 = new Promise((resolve, reject) => {
//   // reject("Непредвиденная ошибка");

//   setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve, reject) => {
//   console.log('test promice')
//   // setTimeout(resolve, 1000, "World");
//   resolve('test promice')

// });

// Promise.all([promise1, promise2])
//   .then(values => {
//     const [promise1data, promise2data] = values;
//     console.log(promise1data, promise2data);    // Hello World
//   });


// пузырьковая сортировка
// function bubble(arr) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       const current = arr[j]; // текущий элемент
//       const next = arr[j + 1]; // следующий


//       // если текущий больше следующего, меняем их местами
//       if (current > next) {
//         arr[j] = next;
//         arr[j + 1] = current;
//       }
//     }
//   }

//   return arr;
// }

// const arr = [4, 7, 9, 2, 3, 1, 8, 2, 4, 6, 5];

// console.log('bubble=', bubble(arr));

// пузырьковая сортировка
// function bubble(arr) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       const current = arr[j]; // текущий элемент
//       const next = arr[j + 1]; // следующий


//       // если текущий больше следующего, меняем их местами
//       if (current > next) {
//         arr[j] = next;
//         arr[j + 1] = current;
//       }
//     }
//   }

//   return arr;
// }

// const arr = [4, 7, 9, 2, 3, 1, 8, 2, 4, 6, 5];

// console.log('bubble=', bubble(arr));

// async function sleep(time = 1) {
//   const sleepMilliseconds = time * 1000

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Slept for: ${sleepMilliseconds}ms`)
//     }, sleepMilliseconds)
//   })
// }

// async function main() {
//   // 1.
//   console.time('main')

//   // 2.
//   const [firstCall, secondCall, thirdCall] = await Promise.all([
//     sleep(1),
//     sleep(2),
//     sleep(3)
//   ])
//   console.log(`First call: ${firstCall}`)
//   console.log(`Second call: ${secondCall}`)
//   console.log(`Third call: ${thirdCall}`)

//   // 3.
//   console.timeEnd('main')
// }

// main()


// let jobs = [0, 1, 2, 3];
// let responseJobs = jobs.reduce((accum, item, index, arrJobs) => {
//   console.log('dsssssssssss');
//   if (index % 2 != 0) {
//     console.log(index);
//   }

//   accum.push(item + 'dsds')
//   return accum
// }, []);
// console.log('responseJobs=', responseJobs);
// console.log('typeof responseJobs=', typeof responseJobs);

// проверка значений по умолчанию в виде внешней функции в функциях в JS

// function defaultLastName() {
//   return "Smith"
// }

// function getName(firstName, LastName = defaultLastName()) {
//   if (LastName) {
//     return `Привет ${firstName},${LastName}`
//   }
//   return `Привет ${firstName}`
// }

// // console.log(getName("Alex", "Siniakou"));
// console.log(getName("Alex"));

// Неопределенный набор параметров работает

// function addNumbers(firstNumber, ...numberArray) {

//   let result = firstNumber;
//   for (let i = 0; i < numberArray.length; i++) {
//     result += numberArray[i];
//   }
//   return result;
// }

// let num1 = addNumbers(3, 7, 8);
// console.log(num1); // 18

// let num2 = addNumbers(3, 7, 8, 9, 4);
// console.log(num2); // 31

//// #ООП Наследование
// this
// const obj = {
//   name: 'Alex',
//   sing() {
//     console.log('a this ', this);//// a this  {name: "Alex", sing: ƒ}
//     var anotherFunc = function () {
//       console.log('b this ', this);// b this  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
//     }                              // node.js = b this  <ref *1> Object [global] {
//     anotherFunc();
//   }
// };

// obj.sing();

//// #Инкапсуляция с использованием замыкания

// const createCounter = () => {
//   // Переменная, определенная в области действия фабрики или конструктора
//   // является приватной для этой функции.
//   let count = 0;

//   return ({
//     // Любые другие функции, определенные в той же области, являются привилегированными:
//     // Они имеют доступ к закрытой переменной `count`
//     // определенной в любом месте их цепочки областей видимости (содержащей области действия функции).
//     click: () => count += 1,
//     getCount: () => count.toLocaleString()
//   });
// };

// const counter = createCounter();

// counter.click();
// counter.click();
// counter.click();

// console.log(counter.getCount()); // "3"


//// Class

// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     return `this name: ${this.name}`
//   }
// }

// let myHuman = new Human('Alex');
// console.log(myHuman.say());

// берем конструктор родителя
// class Men extends Human {
//   constructor(name) {
//     super(name)
//   }
//   // Берем метод say у родителя.
// }

//// переопределение метода
// class Coder extends Human {
//   constructor(name) {
//     super(name)
//   }
//   say() {
//     return `This class Coder new say(). You name ${this.name}`
//   }
// }

// let myCoder = new Coder('AlexCoder');
// console.log(myCoder.say());

//  Prototypal Inheritance Прототипное наследование ES5

// function Person(name) {
//   this.name = name;
// }

// Person.prototype = {
//   eyes: 2,
//   years: 36,
//   say: function () {
//     return `This Prototypal inheritanse - Person.prototype`
//   }
// }

// let myPerson = new Person('AlexPerson');
// console.log(myPerson.say());

// console.log(`myPerson.name= ${myPerson.name}
// eyes=${myPerson.eyes}
// years=${myPerson.years}`)

// Теперь, если у нас есть «класс» сотрудника, то можно наследовать его свойства.

// function Employee(name, salary) {
//   this.name = name;
//   this.salary = salary;
// }
// // Прототип наследования
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;// Устанавливаем его конструктор
// //  Повторяем то же самое
// // Создаем сотрудника
// const em1 = new Employee('John', 3000);
// // и прописываем следующее:
// console.log(
//   `name: ${em1.name}`,
//   `salary: ${em1.salary} USD`,
//   `eyes: ${em1.eyes}`,
//   `years: ${em1.years}`,
//   em1.say()
// );

// // Тот же пример в синтаксисе ES6.
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.eyes = 2;
//     this.mouth = 1;
//   }
//   sleep() {
//     return 'zzz';
//   }
// }
// class Employee extends Person {
//   // расширяем конструктор
//   constructor(name, salary) {
//     super(name);
//     this.salary = salary;
//   }
// }

// Статичные методы:
// class Dog {
//   static whatIs() {
//     return 'This is Dog class'
//   }
// }
// //  Со static мы можем получить доступ к методам без создания экземпляров нового объекта класса.
// console.log(Dog.whatIs());

// Private методы и поля классов ЭКСПЕРИМЕТАЛЬНО добавив перед названием #

// class ClassWithPrivateField {
//   #privateField
// }

// class ClassWithPrivateMethod {
//   #privateMethod() {
//     return 'hello world'
//   }

//   metod() {
//     return 'metod'
//   }
//   returnPrivateMethod() {
//     // return this.metod()
//     return this.#privateMethod() // вызов метода из другого метода внутри класса для объектов этого класса
//   }
// }

// class ClassWithPrivateStaticField {
//   static #PRIVATE_STATIC_FIELD = '#PRIVATE_STATIC_FIELD';
//   static STATIC_FIELD = 'STATIC_FIELD'
//   static returnPRIVATE_STATIC_FIELD() {
//     return this.#PRIVATE_STATIC_FIELD
//     // return this.STATIC_FIELD
//   }
// }

// let myPrivateMet = new ClassWithPrivateMethod();

// console.log(`myPrivateMet.returnPrivateMethod=${myPrivateMet.returnPrivateMethod()}`);
// // console.log(`myPrivateMet. #privateMethodd=${myPrivateMet.#privateMethod()}`); // ошибка - приватный метод
// // console.log(`ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD=${ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD}`);
// console.log(`ClassWithPrivateStaticField.returnPRIVATE_STATIC_FIELD=${ClassWithPrivateStaticField.returnPRIVATE_STATIC_FIELD()}`);

// наследование объектов
// //  __proto__  .
// let a = {
//   "test": 'Text',
//   "color": 'red'
// }

// let b = {
//   "name": 'Alex',
//   __proto__: a// в node.js так не работает
// }

// console.log('а=', a);
// console.log('b=', b);
// console.log('b.color=', b.color);
