//  Вывод четного-нечетного числа.

const currentNum = 50;
let screen;
for(let i = 0; i <= currentNum; i += 1){
    if (i % 2 === 0){
        screen = i;
        console.log("четные числа-", screen);
    }
}