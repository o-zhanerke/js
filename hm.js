let age = 17;
if (age > 16) {
  console.log("1-ex:", "Жасы 16-дан үлкен");
} else {
  console.log("Жасы 16-дан кіші немесе тең");
}

let num = 7;
if (num % 2 === 0) {
  console.log("Жұп");
} else {
  console.log("2-ex:", "Тақ");
}

let temperature = 25;
if (temperature >= 20 && temperature <= 30) {
  console.log("3-ex:", "Температура 20-дан 30 градусқа дейінгі диапазонда");
} else {
  console.log("false");
}

num = -3;
if (num > 0) {
  console.log("true");
} else {
  console.log("4-ex", "Сан оң емес");
}

num = 50;
if (num % 5 === 0 && num % 10 === 0) {
  console.log("5-ex:", "Шын");
} else {
  console.log("false");
}
