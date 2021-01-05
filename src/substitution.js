function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet) return false;
    
    // Declare global variables
    const alphabetIndex = "abcdefghijklmnopqrstuvwxyz";
    const userString = input.toLowerCase();
    let result = "";
    
    
    // Test alphabet string length, should equal 26
    if (alphabet.length !== 26) return false;
    
    // Test alphabet to ensure each character is unique
    const uniqueArray = [];
    for (let letters in alphabet) {
        if (uniqueArray.indexOf(alphabet[letters]) < 0) {
            uniqueArray.push(alphabet[letters]);
        } else {
            return false;
        }
    }

    // Loop through the inputted string
    for (let i=0; i<userString.length;i++) {

        // Ignore spaces
        if (userString[i] === " ") {
            result += " ";
        } else { 
            
            // If encoding, loop through our index alphabet, if decoding, loop through the user alphabet
            let abcIndex = alphabetIndex;
            let abc = alphabet
            if (!encode) {
                abcIndex = alphabet;
                abc = alphabetIndex
            };
            //  Loop, find match, push to result
            for (let j=0; j<abcIndex.length; j++) {
                if (userString[i] === abcIndex[j]) { 
                    result += abc[j];
                }
            }
        }    
    }
    return result;
}

module.exports = substitution;
