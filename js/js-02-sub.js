// Задание
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; 
  
    return canAccessContent;
  }
  
  checkIfCanAccessContent('pro');
  checkIfCanAccessContent('starter');

  
// Задание Подписка пользователя
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


