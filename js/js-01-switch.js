//  Количество звезд отеля и цена
const stars = 5;
let price;

switch(stars){
    case 1:
    case 2:
    case 3:
        price = 25;
        console.log(`Room in this hotel cost - ${price}$.`);
        break;
    case 4:
        price = 40;
        console.log(`Room in this hotel cost - ${price}$.`);
        break;
    case 5:
        price = 60;
        console.log(`Room in this hotel cost - ${price}$.`);
        break;
   
    default:
        console.log('Enter correct quantity of stars please!');
}

// Подписка пользователя
function getSubscriptionPrice(type) {
    let prise;
   
   switch (type) { 
      case 'starter': 
        prise = 0; 
        break;
  
      case 'professional': 
        prise = 20; 
        break;
  
      case 'organization': 
        prise = 50; 
        break;
    }
  
    return prise;
  }
  
  getSubscriptionPrice('professional');
  getSubscriptionPrice('organization');
  getSubscriptionPrice('starter');
  

