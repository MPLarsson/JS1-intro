/* a function to check whether password and username are empty (or null), and return false if they are,
-then it check if the password length is 8 or more
-then it checks if any empty spaces exist 
-finally if any text exist in the username, it converts password & username to lowercase and checks if they are the same 
-if everything checks out returns a value of true*/
function isValidInput(password, username) {

    if (password == '' || password ==null || username == '' || username== null) return false;

    if (password.length < 8) return false;

    if (password.includes(' ')) return false;

    if (username.length > 0) {
        let lowerPass = password.toLowerCase();
        let lowerUser = username.toLowerCase();
        if (lowerPass.includes(lowerUser)) return false;
    }

    return true;
}
/* 
This creates and runs a function when the linked button is clicked,
-creates username and password variables that are given value by the users input
-calls the isValidInput function to check if true or false and gives valid the resulting value
-creates the variable result linked to an empty <p> tag
-if-else statement depending on the value of valid
-the result variable linked to a <p> tag then prints the corresponding text with added styling for distinction*/
document.getElementById('validateBtn').addEventListener('click', function () {

    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;
    let valid;

    if (isValidInput(password, username)==true) {
        valid = true;
    } else {
        valid = false;
    }

    let result = document.getElementById('validationResult');

    if (valid == true) {
    result.textContent = 'Password is valid.';
    result.style.color = 'green';
    } else {
    result.textContent = 'Password is invalid. Must be at least 8 characters, contain no spaces, and must not include the username.';
    result.style.color = 'red';
    }
 });