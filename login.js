function login(username, password) {
  return username === 'admin' && password === '123';
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    message.textContent = login(username, password)
      ? 'Đăng nhập thành công'
      : 'Sai username hoặc password';
  });
}

if (typeof module !== 'undefined') {
  module.exports = login;
}
