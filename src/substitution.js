function substitution(input, alphabet, encode = true) {
    const alphabetIndex = "abcdefghijklmnopqrstuvwxyz";
    
    // Handling missing or extreme values
    if (!input || !alphabet) return false;
   
    // Capital letters can be ignored
    const userString = input.toLowerCase();
    let result = "";
    
    // Should return false if alphabet parameter is not exactly 26 characters
    if (alphabet.length !== 26) return false;
    
    // Should return false if each character in the alphabet parameter is not unique
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

        // Spaces should be maintained throughout'
        if (userString[i] === " ") {
            result += " ";
        } else { 
            
            // If encoding, loop through our index alphabet, if decoding, swap variables, loop through the user alphabet
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
    // Should return an encoded/decoded message
    return result;
}

module.exports = substitution;
