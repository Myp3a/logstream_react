function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let s = '';
  if (a > 10) {
    s += 'a is bigger than 10';
  } else {
    s += 'a is less than or equal to 10 ';
  }
  switch (a) {
    case 5: 
      s += 'an example of a special case';
      break;
    case 15:
      s += 'but a is not 15'; //?
      break;
  }
  if (a > 5) {
    s += 'and a is greater than 5';
  } else {
    s += 'and a is less than or equal to 5 ';
  }
  if (a % 2) {
    s += ' and a is odd';
  } else {
    s += ' and a is even ';
  }
  //return (
  //let ex = (  a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
  // console.log(ex == s);
  return s;
  }

console.log(manyChecks());

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
