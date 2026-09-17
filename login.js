const login = require('./login');

describe('Hàm login', () => {
  test('Trả về true khi username và password đúng', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('Trả về false khi password sai', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });

  test('Trả về false khi username sai', () => {
    expect(login('user', '123')).toBe(false);
  });
});
