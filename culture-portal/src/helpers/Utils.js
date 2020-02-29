const getDayAuthor = (authors) => {
  let dayNumberInYear;
  const authorsCount = authors.length;

  const FEBRUARY_NUMBER = 1;
  const DAYS_IN_JANUARY = 31;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // Algorithm for LeapYear detection from https://habr.com/ru/post/164521/
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // Calculation algorithm for dayNumberInYear from http://deep125.narod.ru/astra_calc/p3.js
  if (month > FEBRUARY_NUMBER) {
    dayNumberInYear = Math.floor((month + 2) * 30.6) - 63 + day + +isLeapYear;
  } else {
    dayNumberInYear = month * DAYS_IN_JANUARY + day;
  }

  const dayAuthorIndex = dayNumberInYear % authorsCount;
  return authors[dayAuthorIndex];
};

export default getDayAuthor;
