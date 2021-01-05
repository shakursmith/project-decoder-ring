function caesar(input, shift, encode = true) {
    const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    // Handling missing or extreme values
    if (!input || !shift ||shift < -25 || shift > 25 || shift === 0) return false;

    // Capital letters can be ignored
    let string = input.toLowerCase();
    let result = "";

    // Loop through input, then abc array
    for (i=0; i < string.length; i++) {
        for (j=0; j < abc.length; j++) {

            // Spaces, and other non-alphabetic symbols, should be maintained throughout
            if (!abc.includes(string[i])) {
                result += string[i];
                break;
            }

            // Find matching values
            if (abc[j] === string[i]) {

                // Create conditions for encode vs decode
                let shifter = j + shift;
                if (!encode) shifter = j - shift;

                // Letters shifted off the alphabet should wrap around
                if (shifter < 0) {
                    shifter += 26;
                    result += abc[shifter];
                } else if (shifter > 25) {
                    shifter -= 26;
                    result += abc[shifter];
                } else result += abc[shifter];
            }
        }
    }
    // Should return an encoded/decoded message
    return result;
}

module.exports = caesar;
