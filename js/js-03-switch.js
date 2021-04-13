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

