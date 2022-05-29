let firstI = document.getElementById("first-I");
let lengthI = document.getElementById("length");
let volumeI = document.getElementById("volume");
let massI = document.getElementById("mass");

function calc() {
    if (firstI.value === 0){
        lengthI.textContent = "";
        volumeI.textContent = "";
        massI.textContent = ""; 
    } else {
        lengthI.textContent = `${firstI.value}
        ${firstI.value > 1 ? "meters" : "meter"} = ${(firstI.value * 3.281).toFixed (3)} feet || 
        ${firstI.value} ${firstI.value > 1 ? "feet" : "foot"} = ${(firstI.value * 0.3048).toFixed(3)}meters`

        volumeI.textContent = `${firstI.value}
        ${firstI.value > 1 ? "liters" : "liter"} = ${(firstI.value * 0.264172).toFixed(3)} gallons
        || ${firstI.value}  ${firstI.value > 1? "gallons" : "gallon"} = ${(firstI.value * 3.78541).toFixed(3)} liters`
        
        massI.textContent = `${firstI.value}
        ${firstI.value > 1 ? "Kilograms" : "kilogram"} = ${(firstI.value * 2.205).toFixed(3)} pounds
        || ${firstI.value}  ${firstI.value > 1? "pounds" : "pound"} = ${(firstI.value * 0.454).toFixed(3)}kilograms`
    }

}