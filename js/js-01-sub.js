// Задание
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; 
  
    return canAccessContent;
  }
  
  checkIfCanAccessContent('pro');
  checkIfCanAccessContent('starter');


  
