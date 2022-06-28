let inputBox = document.getElementById("input-box")
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")
let pass3 = document.getElementById("password3")
let pass4 = document.getElementById("password4")


function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


function generatePasswords() {
    if (inputBox.value > 15) {
        alert("Please enter value less than or equal to 15")
        pass1.textContent = ""
        pass2.textContent = ""
        pass3.textContent = ""
        pass4.textContent = ""
    } else {
        pass1.textContent = generateString(inputBox.value)
        pass2.textContent = generateString(inputBox.value)
        pass3.textContent = generateString(inputBox.value)
        pass4.textContent = generateString(inputBox.value)
    }
}


function copyPassword() {
    if (pass1.innerHTML === "") {
        alert("Please generate password")
      } else {
        navigator.clipboard.writeText(pass1.innerHTML);
        alert("Password Copied Successfully")
      }
}

function copyPassword1() {
    if (pass2.innerHTML === "") {
        alert("Please generate password")
      } else {
        navigator.clipboard.writeText(pass2.innerHTML);
        alert("Password Copied Successfully")
      }
}

function copyPassword2() {
    if (pass3.innerHTML === "") {
        alert("Please generate password")
      } else {
        navigator.clipboard.writeText(pass3.innerHTML);
        alert("Password Copied Successfully")
      }
}

function copyPassword3() {
    if (pass4.innerHTML === "") {
        alert("Please generate password")
      } else {
        navigator.clipboard.writeText(pass4.innerHTML);
        alert("Password Copied Successfully")
      }
}
