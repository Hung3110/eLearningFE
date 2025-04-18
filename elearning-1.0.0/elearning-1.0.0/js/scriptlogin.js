let container = document.getElementById('container');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

const buttons = [registerBtn, loginBtn];

buttons.forEach(button => {
    button.onclick = function() {
        const action = this.id === 'register' ? 'add' : 'remove';
        container.classList[action]('active');
    };
});

document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn form reload trang
    document.getElementById("container").classList.remove("right-panel-active"); 
});

document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn form reload trang
    
    let password = document.getElementById("password").value;
    let retypePassword = document.getElementById("retypePassword").value;
    let errorMessage = document.getElementById("error-message");

    if (password !== retypePassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        document.getElementById("container").classList.remove("right-panel-active"); // Chuyển về Sign In
    }
});
