let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault() 
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    let suggestion = document.querySelector(".suggestion")
    let interpreation = document.querySelector(".interpretation")
    let result = document.querySelector(".result")

    if ((height === "" || height < 0 || isNaN(height)) && ((weight === "" || weight < 0 || isNaN(weight)))) {
        suggestion.innerHTML = "Enter a valid height(cm) and weight(kg)"
        result.innerHTML = ""
        interpreation.innerHTML = ""
    } else if (height === "" || height < 0 || isNaN(height)) {
            suggestion.innerHTML = "Enter a valid height in cm "
            result.innerHTML = ""
            interpreation.innerHTML = ""

        
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
            suggestion.innerHTML = "Enter a valid weight in kg"
            result.innerHTML = ""
            interpreation.innerHTML = ""
    } else {
        let bmi = (weight / ((height * height) / 10000))
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`
        suggestion.innerHTML = ""
        if (bmi < 18.5) {
            interpreation.innerHTML = "Yours interpretation : Underweight"
            interpreation.style.color = "white"
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            interpreation.innerHTML = "Your interpretation : Healthy Weight"
            interpreation.style.color = "green"
        } else if (bmi >= 25 && bmi <= 29.9) {
            interpreation.innerHTML = "Your interpretation : Overweight"
            interpreation.style.color = "yellow"
        } else if (bmi >= 30 && bmi <= 40) {
            interpreation.innerHTML = "Your interpretation : Obesity"
            interpreation.style.color = "red"
        } else {
            result.innerHTML = ""
            interpreation.innerHTML = "You entered wrong data that cant be considered"
            suggestion.innerHTML = "Height range: 91.4cm - 271.8cm and Weight range :25kg - 454kg"
            
            interpreation.style.color = "black"
        }
    }
})
