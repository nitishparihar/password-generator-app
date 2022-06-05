let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
let pass3 = document.getElementById("password3")
let pass4 = document.getElementById("password4")

//let passwordLength = document.getElementById("a")


function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


//function keyUp() {
//   passwordLength.textContent = (event.target.value)
//}


function generatePasswords() {
    pass1.textContent = generateString(10)
    pass2.textContent = generateString(10)
    pass3.textContent = generateString(10)
    pass4.textContent = generateString(10)
}


//Math.random().toString(36).slice(2)