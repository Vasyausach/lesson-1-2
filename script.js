'use strict';

let money, time, d, op;

money = +prompt('Ваш бюджет на месяц','');
time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: []
};

console.log(appData.expenses);

for (let i = 0;i < 2; i++) {
    let price = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется?", "");

    if ( (typeof(price)) === 'string' && (typeof(price)) !=null && (typeof(cost) !=null
        && price !='' && cost !='' && price.length < 50)){
    console.log("done");
    appData.expenses[price] = cost;
    } else{
        i--;
    }
};



// let i=0;
// while(i<2){
// let price = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     cost = +prompt("Во сколько обойдется?", "");
//     if ( (typeof(price)) === 'string' && (typeof(price)) !=null && (typeof(cost) !=null
//         && price !='' && cost !='' && price.length < 50)){
//     console.log("done");
//     appData.expenses[price] = cost;
//     } else{
//         i--;
//      }
//     i++;
// };



// let i=0;
// do {
//     let price = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      cost = +prompt("Во сколько обойдется?", "");
//      if ( (typeof(price)) === 'string' && (typeof(price)) !=null && (typeof(cost) !=null
//          && price !='' && cost !='' && price.length < 50)){
//      console.log("done");
//      appData.expenses[price] = cost;
//      } else{
//          i--;
//       }
//      i++;
// } while(i<2);



appData.moneyPerday = appData.budget / 30;

if (appData.moneyPerday <1000) {
    console.log('Низкий уровень достатка');
} else if (appData.moneyPerday >1000 && appData.moneyPerday < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerday > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ой, ошибочка!');
}

alert('Ежедневный бюджет' + appData.moneyPerday);