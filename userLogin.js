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

let userLogin = () => {
    fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => {
            let allUsernames = [];
            let allPasswords = [];
            for (user of users) {
                allUsernames.push(user.username)
                allPasswords.push(user.password)
            };
        
            if (allUsernames.includes(username.value) && allPasswords.includes(password.value)) {
                for (user of users) {
                    if (user.username == username.value && user.password == password.value) {
                        return document.body.innerHTML = `<center><h1>${user.username} is logged in. Congratulations.</h1></center>`;
                    };
                }
            } else {
                alert("Wrong Username/Password Combination. Try Again.");
            }
                  
        })
};

button.addEventListener("click", userLogin);

module.exports = userLogin;