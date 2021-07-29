
// let normalWord = prompt("What word do you want to translate?", "Hello");
// let firstLetter = normalWord.charAt(0)
// let readyToPig = normalWord.slice(1,normalWord.length);

// let pigItUp = "ay"

//  translate = (normalWord) => readyToPig + firstLetter + pigItUp;

// translate();

let translate = (normalWord) => {
    let firstLetter = normalWord.charAt(0).toLowerCase();
    let upgradeAlpha =  normalWord.charAt(1).toUpperCase();
    let readyToPig = normalWord.slice(2,normalWord.length);
    let pigItUp = "ay";
    let pigItUpVegan = "way";

    if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u"){
        return normalWord + pigItUpVegan;
    }else{
        return upgradeAlpha + readyToPig + firstLetter + pigItUp;
    }
}

module.exports = translate;