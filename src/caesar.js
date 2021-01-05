function caesar(input, shift, encode = true) {
    const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (!input || !shift ||shift < -25 || shift > 25 || shift === 0) return false;

    let string = input.toLowerCase();
    let result = "";

    for (i=0; i < string.length; i++) {
        for (j=0; j < abc.length; j++) {
            if (!abc.includes(string[i])) {
                result += string[i];
                break;
            }

            if (abc[j] === string[i]) {
                let shifter = j + shift;
                if (!encode) shifter = j - shift;
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
return result;
}

module.exports = caesar;
