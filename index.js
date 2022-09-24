
// if(login == 'Працівник'){
  //   message='Привіт';
  // }

  // ТЕРНАРНИЙ ОПЕРАТОР - message = (condition) ? '' : ''

//   let message;
// let login = prompt('Введіть логін : ');
// message = (login == 'Працівник') ? 'Привіт' : 'Добрий день'
// console.log(message);

// var x = 10, y = 10, position = '';
// alert('Введіть end для виходу');
// if(position != 'end') {
//   alert('Ваші координати : ' + x + ',' + y)
//   position = prompt('Виберіть напрямок (n,s,e,w):');
//   if(position == 'n'){
//     y--; // y = y - 1;
//   } else if(position == 's'){
//     y++; // y = y + 1
//   } else if(position == 'e'){
//     x++;
//   } else if(position == 'w'){
//     x--;
//   }
// };

// alert('Ваші координати : ' + x + ',' + y);

// -----------------------------------------
// SWITCH

// let start;
// let bulba = prompt('Введіть якесь слово : ');

// switch(bulba){
//   case 'Bandera' :
//   start = alert(0);
//   break;
//   case 'Renata' :
//     start = alert(10);
//     break;
//   default :
//   alert('Ви ввели невалідне значення');
// }
// console.log(start)

// -----------------------------------

// const one = 10;
// if(1){
//   console.log('Hello', one);
// }

// console.log('Hello 2', one); //10

// if(1){
//   const one = 10
//   console.log('Hello', one);
// }

// console.log('Hello 2', one); //error

// if(1){
//   const two = 6;
//   console.log(one)
// }
// ---------------------------------------


// WHILE

// let one = 4;
// while(one < 10){
// one++;
// }

// -------------------

// DO WHILE

// let one = 4;
// do{
//   one++;
//   console.log(one);
// }
// while (one > 10); //false

// --------------------------
// FOR

// const max = 10;
// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

// let count = prompt("Enter number:");
// let i = count;
// let rand;
// while (i > 0) {
//     rand = Math.floor(Math.random()*100);
//     console.log(`Random number_${count - i + 1} : ${rand}`);
//     i--;
// }

// ---------------

// let number;
// let max = 0;
// do{
//   number = +prompt('Enter your number: ');
//   if(number > max){
//     max = number;
//   }
// }
// while (number != 0);
// alert('Max num: ' + max);

// ---------------