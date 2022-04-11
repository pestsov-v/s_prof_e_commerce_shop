const USERS = "/user";
const USER = "/user/:id";
const PROFILE = "/profile";
const DEACTIVATED = "/user/:id/deactivated";
const REACTIVATED = "/user/:id/reactivated";

const userPath = {
  users: USERS,
  user: USER,
  deactivated: DEACTIVATED,
  reactivated: REACTIVATED,
  profile: PROFILE,
};

module.exports = userPath;
