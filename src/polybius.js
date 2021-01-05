function polybius(input, encode = true) {
    const alphabet = {
        "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
        "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
        "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
        "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
        "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
        };
    
    // Handling missing or extreme values
    if (!input) return false;

    // Capital letters can be ignored
    const lowerCase = input.toLowerCase()
    let result = ""   
    
    // Create methods for encoding
    if (encode) {
        for (let i = 0; i < lowerCase.length; i++) {

            // Spaces should be maintained throughout
            let char = lowerCase[i];
            if (char === "i" || char === "j") {
                result += alphabet["i"];
            } else if (char === " ") {
                result += " ";
            } else {
                let matches = Object.entries(alphabet).find((letter) => char === letter[0]);
                result += matches[1];
            }
        }
    } else {

        // Should return false if the string of coordinates is not an even number, ignoring spaces
        let counter = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== " ") counter++;
        }
        if (counter % 2 !== 0) {
            return false;
        };

        // Create methods for decoding
        // "I" and "J" should be shown together if included
        for (let i = 0; i < input.length; i+=2) {
            let code = `${input[i]}${input[i+1]}`;
            if (code.includes(" ")) {
                result += " ";
                i-=1;
            } else if (code === "42") {
                result += "(i/j)";
            } else {
                let matches = Object.entries(alphabet).find((letter) => code === letter[1])
                if (matches) result += matches[0];
            }
        }
    }
    // Should return an encoded/decoded message
    return result;
}

module.exports = polybius;
