export var random_code 
var random_code = generate_random_string(8)
function generate_random_string(string_length) {
    let random_code = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_code += String.fromCharCode(random_ascii)
    }
    return random_code
}
