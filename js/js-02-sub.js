
// Функция  проверяет, может ли пользователь получить доступ к контенту.

// Проверка происходит по типу подписки.

//  Получить доступ могут только пользователи с подпиской pro или vip.

const checkIfCanAccessContent = function (subType) {
  const canAccessContent = subType === "pro" || subType === "vip";

  console.log(
    `может ли пользователь получить доступ к контенту - ${canAccessContent}`
  );
  return canAccessContent;
};
checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
