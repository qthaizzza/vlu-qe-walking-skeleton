const login = require("./login");

describe("login()", () => {
  test("Đăng nhập đúng", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Sai password", () => {
    expect(login("admin", "wrong")).toBe(false);
  });

  test("Sai username", () => {
    expect(login("user", "123")).toBe(false);
  });
});
