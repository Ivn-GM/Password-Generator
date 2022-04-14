const button = document.getElementById("greenButton");
const code = document.getElementById("code");
const lengthValue = document.getElementById("length");
const lettersChecked = document.getElementById("lettersChecked");
const numbersChecked = document.getElementById("numbersChecked");
const symbolsChecked = document.getElementById("symbolsChecked");
const meterValue = document.getElementById("meter");

const letters = "abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%^&*_-+=";

const lettNum = letters.concat("", numbers);
const lettSym = letters.concat("", symbols);
const numSym = numbers.concat("", symbols);

const allOfThem = letters.concat("", numbers, symbols);


let shuffle = (x) => {
    let a = x.split("");
    let n = a.length;

    for(let i = n; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;  
    }
    return a.join("");  
}


button.addEventListener('click', () => {
  let char = "";
  if (lettersChecked.checked == true && numbersChecked.checked == false && symbolsChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "50";
    char += letters;
  } else if (lettersChecked.checked == true && numbersChecked.checked == false && symbolsChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "25";
    char += letters;
  } else if (numbersChecked.checked == true && lettersChecked.checked == false && symbolsChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "50";
    char += numbers;
  } else if (numbersChecked.checked == true && lettersChecked.checked == false && symbolsChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "25";
    char += numbers;
  } else if (symbolsChecked.checked == true && numbersChecked.checked == false && lettersChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "50";
    char += symbols;
  } else if (symbolsChecked.checked == true && numbersChecked.checked == false && lettersChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "25";
    char += symbols;
  } else if (lettersChecked.checked == true && numbersChecked.checked == true && symbolsChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "75";
    char += lettNum;
  } else if (lettersChecked.checked == true && numbersChecked.checked == true && symbolsChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "50";
    char += lettNum;
  } else if (lettersChecked.checked == true && symbolsChecked.checked == true && numbersChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "75";
    char += lettSym;
  } else if (lettersChecked.checked == true && symbolsChecked.checked == true && numbersChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "50";
    char += lettSym;
  } else if (numbersChecked.checked == true && symbolsChecked.checked == true && lettersChecked.checked == false && lengthValue.value >= 8) {
    meterValue.value = "75";
    char += numSym;
  } else if (numbersChecked.checked == true && symbolsChecked.checked == true && lettersChecked.checked == false && lengthValue.value < 8) {
    meterValue.value = "50";
    char += numSym;
  } else if (lettersChecked.checked == true && numbersChecked.checked == true && symbolsChecked.checked == true && lengthValue.value >= 8) {
    meterValue.value = "100";
    char += allOfThem;
  } else if (lettersChecked.checked == true && numbersChecked.checked == true && symbolsChecked.checked == true && lengthValue.value < 8) {
    meterValue.value = "75";
    char += allOfThem;
  } else {
    meterValue.value = "0";
    char = "********";
  }

  let password = shuffle(char).slice(0, lengthValue.value);
  code.innerHTML = password;
});

