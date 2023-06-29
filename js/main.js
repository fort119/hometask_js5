// first loop
console.log("первый цикл:");
let numbers = "";

for (let i = 10; i < 21; i++) {
  if (i === 20) {
    numbers += i + ";";
  } else {
    numbers += i + ", ";
  };
}
console.log(numbers);

//second loop
console.log("второй цикл:");
let squ = "";

for (let i = 10; i < 21; i++) {
  if (i === 20) {
    squ += i ** 2 + ";";
  } else {
    squ += i ** 2 + ", ";
  }
};
console.log(squ);

//third loop
console.log("третий цикл:");

let mult = "";
let result = ""

for (let i = 1; i < 11; i++) {
  mult = 7 * i;
  result = `7 x ${i} = ${mult}`;
  console.log(result);
}

//fourth loop
console.log("четвертый цикл:");

let sum = 0;

for (let i = 1; i < 16; i++) {
  sum += i;
}
console.log(sum);

//fifth loop
console.log("пятый цикл:");

let resOfMult = 1;

for (let i = 1; i < 36; i++) {
  resOfMult *= i;
}
console.log(BigInt(resOfMult));

//sixth loop
console.log("шестой цикл:");

let aver = 0;

for (let i = 1; i < 501; i++) {
  aver += i;
}
aver /= 500;
console.log(aver);

//seventh loop
console.log("седьмой цикл:");

let even = 0;

for (let i = 30; i < 81; i++) {
  if (i % 2 === 0) {
    even += i;
  };
}
console.log("сумма всех парных чисел от 30 до 80: " + even);

//eight loop
console.log("восьмой цикл:");

let divThree = "";

for (let i = 100; i < 201; i++) {
  if (i % 3 === 0) {
    divThree += i + ",";
  };
}
console.log(divThree);

//ninght-eleventh loop
console.log("циклы с 9го по 11й:");

let nat = +prompt("введите натуралтное число (для 9го цикла)");
let sum2 = 0;
let counter = 0;

for (let i = 0; i <= nat; i++) {
  if (nat % i === 0) {
    console.log(`Один из делитель натурального числа ${nat}: ${i}`);
    if (i % 2 === 0) {
      counter++;
      sum2 += i;
    }
  }
}

console.log(`количество парных делителей числа: ${counter}`);
console.log(`сумма всех парных делителей числа: ${sum2}`);

//twelfth loop
console.log("двенадцатый цикл:");

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let j = 10; j <= 10; j++) {
    str += j * i;
  }
  console.log(`${i} x 10 = ${str}`);
}




