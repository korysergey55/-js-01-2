//  Количество звезд отеля и цена

const stars = 5;
let price;

switch(stars){
    case 1:
    case 2:
    case 3:
        price = 25;
        break;
    case 4:
        price = 40;
        break;
    case 5:
        price = 60;
        break;
   
    default:
        console.log('Enter quantity of stars please!');

}

    console.log(`Room in this hotel cost - ${price}$.`);

