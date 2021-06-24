// Desafio 10
function techList(techNamesArr, nomeAluno) {
  if (techNamesArr.length === 0) {
    return 'Vazio!';
  }
  let techListArr = [];
  let sortedTechNamesArr = techNamesArr.sort();
  for (let techName of sortedTechNamesArr) {
    techListArr.push({
      tech: techName,
      name: nomeAluno,
    });
  }
  return techListArr;
}

// Desafio 11
function invalidDigit(arrayPhoneNumber) {
  for (let num of arrayPhoneNumber) {
    if (num < 0 || num > 9) {
      return false;
    }
  }
  return true;
}

function countRepeatedNumber(num, arrayPhoneNumber) {
  let counts = 0;
  for (let key in arrayPhoneNumber) {
    if (arrayPhoneNumber[key] === num) {
      counts += 1;
    }
  }
  return counts;
}

function hasThreeOrMoreRepeats(arrayPhoneNumber) {
  let count = 0;
  for (let num of arrayPhoneNumber) {
    count = countRepeatedNumber(num, arrayPhoneNumber);
    if (count > 2) {
      return false;
    }
  }
  return true;
}

function generatePhoneString(arrayPhoneNumber) {
  if (typeof arrayPhoneNumber === 'string') {
    return arrayPhoneNumber;
  }

  let phoneNumberString = `(${arrayPhoneNumber[0]}${arrayPhoneNumber[1]}) `;

  for (let i = 2; i < 7; i += 1) {
    phoneNumberString += arrayPhoneNumber[i];
  }

  phoneNumberString += '-';

  for (let i = 7; i < 11; i += 1) {
    phoneNumberString += arrayPhoneNumber[i];
  }
  return phoneNumberString;
}

function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidDigit(arrayPhoneNumber) && hasThreeOrMoreRepeats(arrayPhoneNumber)) {
    return generatePhoneString(arrayPhoneNumber);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheckSide(a, b, c) {
  return a < b + c && a > Math.abs(b - c);
}

function triangleCheck(lineA, lineB, lineC) {
  let checkSideA = triangleCheckSide(lineA, lineB, lineC);
  let checkSideB = triangleCheckSide(lineB, lineA, lineC);
  let checkSideC = triangleCheckSide(lineC, lineA, lineB);
  return checkSideA || checkSideB || checkSideC;
}
// sites consultados para o Desafio 13:
// https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
// https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
// https://www.codegrepper.com/code-examples/javascript/get+all+integers+inside+a+string+js
// Desafio 13
function hydrate(boozeString) {
  let numberArray = boozeString.match(/\d+/g);
  numberArray = numberArray.map((i) => parseInt(i, 10));
  let numberSum = numberArray.reduce((acc, value) => acc + value);

  if (numberSum === 1) {
    return '1 copo de água';
  }
  return `${numberSum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
