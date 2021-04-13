
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. 


function getShippingCost(country) {
    let message;
     
    switch(country){
      case country = 'Китай':
        message = 'Доставка в Китай будет стоить 100 кредитов';
        break;
      case country = 'Чили':
        message = 'Доставка в Чили будет стоить 250 кредитов';
        break;
      case country = 'Австралия':
        message = 'Доставка в Австралия будет стоить 170 кредитов';
        break;
       case country = 'Ямайка':
        message = 'Доставка в Ямайка будет стоить 120 кредитов';
        break;
        default: message = 'Извините, в вашу страну доставки нет';
    }
return message;
  }
  getShippingCost('Австралия');
  getShippingCost('Германия');
  getShippingCost('Китай') ;
  