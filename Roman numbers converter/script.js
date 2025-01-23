const input = document.getElementById('input');
const submitBtn = document.querySelector('.submit-btn');
const form = document.getElementById('form');
const resultOutput = document.querySelector('.result-window')



function romanConventer (num) {
  const romanNum = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9],
    ['V', 5], 
    ['IV', 4], 
    ['I', 1]
  ];

  let result = [];


  romanNum.forEach((arr) => {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });
  return result.join('');
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateUI();
})

function userInput (str, input) {

  let textErr = '';

  if(!str || str.match(/[e.]/g)) {
    textErr = "Zadejte prosím platnou hodnotu";
  } else if (input < 1) {
    textErr = "Zadejte prosím číslo větší nebo rovno 1";
  } else if (input > 3999) {
    textErr = "Zadejte prosím číslo menší nebo rovno 3999";
  } else {
    return true;
  }

  resultOutput.innerText = textErr;
  resultOutput.classList.add('alert');


}

function clearOutput () {
  resultOutput.innerText = '';
  resultOutput.classList.remove('alert');
}

function updateUI () {
  const inputValue = input.value;
  const int = parseInt(inputValue, 10);

  resultOutput.classList.remove('hidden');

  clearOutput();

  if(userInput(inputValue, int)) {
    resultOutput.innerText = romanConventer(int);
  }
}

submitBtn.addEventListener("click", () => {
  updateUI();
  resultOutput.style.display = "block";
  console.log(updateUI())
})



