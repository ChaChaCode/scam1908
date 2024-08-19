const translationsRU = {
  "New-Rank-text": "Новый рангㅤ",
  "doSledRank": "Далее:", // "next"
  "nextRank": "Кодер", // "rankCoder"
  "Boost": "УСКОРИТЬ", // "boost"
  "upgradeButtonText": "Улучшения", // "upgrades"
  "inviteButtonText": "Друзья", // "friends"
  "tapButtonText": "Тап", // "tap"
  "topButtonText": "Рейтинг", // "top"
  "tasksButtonText": "Задания", // "tasks"
  "send-your-friends": "Пригласите друзей!", // "inviteFriends"
  "you-and-your": "Вы и ваш друг получите бонусы", // "youAndFriendBonus"
  "invite-a-friend": "Пригласить друга.", // "inviteFriend"
  "for-you-and": "для вас и вашего друга.", // "forYouAndFriend"
  "for-you-and1": "для вас и вашего друга.", // "forYouAndFriend"
  "copy": "Копировать", // "copy"
  "linktext": "РЕФЛИНК", // "refLink"
  "invited-friends": "Приглашенные друзья", // "invitedFriends"
  "player-rankGlav": "Ранг", // "playerRank"
  "player-prizGlav": "Награда", // "playerPrize"
  "nextTextRank": "ДАЛЕЕ:", // "nextRank"
  "freeenergy": "Ежедневные бесплатные ускорители", // "dailyFreeBoosters"
  "multi-tap-x2": "Мульти-Тап Х2", // "multiTapX2"
  "available": "Доступно", // "available"
  "use": "Использовать", // "use"
  "full-energy": "Полная энергия", // "fullEnergy"
  "maximumTapsRecovery": "Максимальное количество тапов восстанавливается через 3 часа.", // "maxTapsRecovery"
  "buyFor": "Купить за", // "buyFor"
  "scam": "SCAM$", // "scam"
  "tapsPerClick": "тапа за клик", // "tapsPerClick"
  "tapBotInfo": "Работает автоматически. Количество тапов в час зависит от уровня.", // "tapBotInfo"
  "tapsPerHour": "тапов в час", // "tapsPerHour"
  "eachLineOfCode": "Каждая строка кода приносит вам бонусы.", // "eachLineBonus"
  "upgradeEfficiency": "Улучшайте, увеличивайте эффективность и становитесь лучшим!", // "upgradeEfficiency"
  "codeForScam": "Код для SCAM$ и зарабатывайте деньги!", // "codeForScam"
  "button-text1": "МАГАЗИН",
  "button-text2": "ДРУЗЬЯ",
  "button-text3": "ТАП",
  "button-text4": "РЕЙТИНГ",
  "button-text5": "ЗАДАНИЯ",
  "shapkaupgrade": "ПРОКАЧКА",
  "textsoon": "СКОРО",
};

// Объект с переводами на английский язык (если они есть)
const translationsEN = {
  "currentRank": "Novice",
  "Boost": "Boost",
  "upgradeButtonText": "Upgrades",
  "inviteButtonText": "Friends",
  "tapButtonText": "Tap",
  "topButtonText": "Leaderboard",
  "tasksButtonText": "Tasks",
  "rankName": "Novice",
  "send-your-friends": "Invite your friends!",
  "you-and-your": "You and your friend will get bonuses",
  "invite-a-friend": "Invite a friend.",
  "for-you-and": "for you and your friend.",
  "copy": "Copy",
  "linktext": "REFLINK",
  "invited-friends": "Invited friends",
  "player-rankGlav": "Rank",
  "player-prizGlav": "Prize",
  "nextTextRank": "Next:",
  "multi-tap-x2": "multiTapX2",
  "freeenergy": "FREE DAILY BOOSTERS",
  "shapkaupgrade": "UPGRADE",
  "button-text1": "UPGRADE",
  "button-text2": "INVITE",
  "button-text3": "TAP",
  "button-text4": "TOP",
  "button-text5": "TASKS",
  "textsoon": "SOON",
  "New-Rank-text": "New",
};

// Переменная для отслеживания текущего языка
let isRussian = false;

// Функция для перевода текста по классу
function translateByClass(className, translatedText) {
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    if (!element.hasAttribute('data-original-text')) {
      element.setAttribute('data-original-text', element.textContent);
    }
    element.textContent = isRussian ? translatedText : element.getAttribute('data-original-text');
  }
}

// Функция для выполнения перевода
function translateText(language) {
  const translations = language === 'RU' ? translationsRU : translationsEN;
  for (const className in translations) {
    translateByClass(className, translations[className]);
  }
}

// Функция для перевода текста в модальных окнах
function translateModals(language) {
  const modalElements = document.querySelectorAll('.modal'); // предполагается, что у всех модальных окон есть класс 'modal'
  modalElements.forEach(modal => {
    translateText(language); // Переводим текст внутри модальных окон
  });
}

// Функция для установки языка
function setLanguage(language) {
  isRussian = (language === 'RU');
  translateText(language);
  translateModals(language); // Обновляем модальные окна
  localStorage.setItem('language', language);
  const languageButton = document.getElementsByClassName("language1")[0];
  languageButton.textContent = isRussian ? 'RU' : 'EN';
}

// Обработчик события для кнопки смены языка
document.getElementsByClassName("language1")[0].onclick = function() {
  const newLanguage = isRussian ? 'EN' : 'RU'; // Переключаем язык
  setLanguage(newLanguage);
};

// Инициализируем страницу с исходными текстами
window.onload = function() {
  const savedLanguage = localStorage.getItem('language') || 'EN'; // Загружаем язык из localStorage или используем английский по умолчанию
  setLanguage(savedLanguage);
};
