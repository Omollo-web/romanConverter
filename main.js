// Grab english & romanInput, we are listening for an input event
const englishInput = document.getElementById("englishInput");
const romanInput = document.getElementById("romanInput");

// For englishInput, anytime a number is entered; englishToRoman method is called & value put in romanInput
englishInput.addEventListener("input", (e) =>{
    romanInput.value = englishToRoman(e.target.value)
}) ;
//For romanInput, anytime a roman num is entered; romanToEnglish method is called and puts its value into the englishInput.
romanInput.addEventListener("input", (e) =>{
    englishInput.value = romanToEnglish(e.target.value)
})

// Convert from english numerical to roman numerial
function englishToRoman(number) {
    let roman = " ";
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;
    // the method takes an integer num as argument check if num is less or greater & returns "enter a number within a range"    
    if(number < 1 || number > 3999) 
    return "Enter a number between 1 and 3999"   
    else {
    // Use loop through the object & divide the numbers by the object keys then run dowm the results        
        for(let key in romanNumList) {
            a = Math.floor(number / romanNumList[key]);
                if (a >= 0) {
    //  use for loop that appends the object key into the variable roman is run
                    for(let i = 0; i < a; i++) {
                        roman += key;
                    }
                }
                number = number % romanNumList[key];
        }
    }
    return roman;
}

// Convert from roman numericals to numbers
function romanToEnglish(romanNumber) {
    //convert the string argument into uppercase
    romanNumber = romanNumber.toUpperCase();
    //create two arrays one containing roman numerals and the other correspondent in English numerical system
    const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
    const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    //Loop through the romanNumList array look for index of roman numerals in the romanNumber
    let index = 0, num = 0;
    for (let rn in romanNumList) {
        index = romanNumber.indexOf(romanNumList[rn]);
        while(index != -1) {
      //the num variable is incremented with the corresponded Arabic number, and the roman numeral is replaced by a hyphen “-”  
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn], "-");
      index = romanNumber.indexOf(romanNumList[rn]);
        }
    }
    return num;
}
