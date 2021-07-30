const userLogin = require("./userLogin");

test("returns false for empty password", () => {
  expect(validatePassword("")).toBe(false)
})
test("returns false for password without numbers", () => {
  expect(validatePassword("dfdff")).toBe(false)
})
