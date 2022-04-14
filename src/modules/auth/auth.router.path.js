const SIGNUP = "/signup";
const LOGIN = "/login";
const LOGOUT = "/logout";
const PASSWORD = "/password";
const RESET = "/password/:token";

const authPath = {
  signup: SIGNUP,
  login: LOGIN,
  logout: LOGOUT,
  password: PASSWORD,
  reset: RESET,
};

module.exports = authPath;
