let message
let ordered = 180;
const total = 100;

//1 вариант//

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
  };

if (ordered < total) {
    message = 'Заказ оформлен, с вами свяжется менеджер.';
  };

console.log(message);

//2 вариант//

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  };

console.log(message);