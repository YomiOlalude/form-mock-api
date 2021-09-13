/*
PROCESS
1. Create a form using HTML and Bootstrap.
2. Use CSS to further adjust the styling of the form to fit desired specifications.
3. Use json-server to create a Mock API which serves a json file containing inputted usernames and passwords for authentication.
4. Use vanilla JavaScript to create logic for user authentication.
5. Without the right username-password combination, user will not be able to access information called from API.
6. Use jest to write automated unit tests.
*/

let button = document.querySelector(".btn");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

let data = [
    {
      "id": 1,
      "username": "yomi",
      "password": "olalude"
    },
    {
      "id": 2,
      "username": "seyi",
      "password": "akanbi"
    },
    {
      "id": 3,
      "username": "kemi",
      "password": "theophilus"
    },
    {
      "id": 4,
      "username": "bunmi",
      "password": "ajibola"
    }
]
  


let validatePassword = (password) => {
    let validLength = password.length >= 4;
    let hasLetter = /[a-zA-Z]/g.test(password);
    return hasLetter && validLength
}

let userLogin = () => {
    let dataJson = JSON.stringify(data)
    let users = JSON.parse(dataJson);
    let allUsernames = [];
    let allPasswords = [];

    for (user of users) {
        allUsernames.push(user.username)
        allPasswords.push(user.password)
    };
    if (allUsernames.includes(username.value.toLowerCase()) && allPasswords.includes(password.value) && validatePassword(password.value) == true) {
        for (user of users) {
            if (user.username == username.value.toLowerCase() && user.password == password.value) {
                let str = String(user.username)
                return document.body.innerHTML = `<center><h1>${str.toUpperCase()} is logged in. Congratulations.</h1></center>`;
            }
            
            if (allUsernames.indexOf(username.value.toLowerCase()) != allPasswords.indexOf(password.value)) {
            alert("Wrong Username/Password Combination. Try Again.");
            break
            } 
        }

    } else {
        alert("Wrong Username/Password Combination. Try Again.");
    }
    
};

button.addEventListener("click", userLogin);
