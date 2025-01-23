let result = document.getElementById("display");

const display = (value) => {
    result.value += value;
    if (value === "()") {
        
    }
}

const solve = () => {
    let x = result.value;
    let y = math.evaluate(x);
    result.value = y
}

const clearDisplay = () => {
    result.value = "";
}

const backspace = () => {
    result.value = result.value.slice(0, -1);
};