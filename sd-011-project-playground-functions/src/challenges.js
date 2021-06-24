// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let posicao1 = arrayStrings[0];
  let posicao2 = arrayStrings[arrayStrings.length - 1];
  return `${posicao2}, ${posicao1}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestCount(arrayValores) {
  let countHigh = 0;
  function highestNumber(arrayHigh) {
    return Math.max.apply(null, arrayHigh);
  } for (let index = 0; index < arrayValores.length; index += 1) {
    if (highestNumber(arrayValores) === arrayValores[index]) {
      countHigh += 1;
    }
  } return countHigh;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(Math.abs(mouse) - Math.abs(cat1));
  let dist2 = Math.abs(Math.abs(mouse) - Math.abs(cat2));
  if (dist1 > dist2) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
}

// Desafio 8
function numFizzBuzz(numero) {
  if (numero % 15 === 0) {
    return 'fizzBuzz';
  } if (numero % 3 === 0) {
    return 'fizz';
  } if (numero % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numeros) {
  let arrayFizzBuzz = [];
  for (let num of numeros) {
    arrayFizzBuzz.push(numFizzBuzz(num));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let encryptoDictionary = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encodeString = '';
  for (let char of string) {
    if (encryptoDictionary[char]) {
      encodeString += encryptoDictionary[char];
    } else {
      encodeString += char;
    }
  }
  return encodeString;
}

function decode(string) {
  let decryptoDictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodeString = '';
  for (let char of string) {
    if (parseInt(char, 10) > 0 && parseInt(char, 10) < 6) {
      decodeString += decryptoDictionary[parseInt(char, 10)];
    } else {
      decodeString += char;
    }
  }
  return decodeString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
