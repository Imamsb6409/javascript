function calculate(num1, num2, operation) {
    let result = operation(num1, num2)
    console.log("hasilnya adalah " + result)
}


function penambahan(a, b) {
    return a + b
}

function perkalian(a, b) {
    return a * b
}


calculate(4, 3, penambahan)
calculate(7, 3, perkalian)