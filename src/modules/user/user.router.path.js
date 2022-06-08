const USERS = "/user";
const USER = "/user/:id";
const PROFILE = "/profile";
const DEACTIVATED = "/user/:id/deactivated";
const REACTIVATED = "/user/:id/reactivated";
const CHANGE_MANAGER = "/user/:id/manager";

const userPath = {
  users: USERS,
  user: USER,
  deactivated: DEACTIVATED,
  reactivated: REACTIVATED,
  profile: PROFILE,
  changeRole: CHANGE_MANAGER,
};

module.exports = userPath;
