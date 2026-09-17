function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form đăng nhập trên trình duyệt
if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (login(username, password)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai username hoặc password!";
        }
    });
}

// Cho phép Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
