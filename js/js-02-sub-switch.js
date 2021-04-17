// Задание Подписка пользователя
const getSubscriptionPrice = function (type) {
  let prise;

  switch (type) {
    case "starter":
      prise = 0;
      break;

    case "professional":
      prise = 20;
      break;

    case "organization":
      prise = 50;
      break;
  }
  console.log(`Подписка пользователя ${type} - ${prise}`);
  return prise;
};

getSubscriptionPrice("professional");
getSubscriptionPrice("organization");
getSubscriptionPrice("starter");
