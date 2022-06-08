exports.deactivatedMessage = "Пользователь успешно деактивирован";
exports.reactivatedMessage = "Пользователь успешно восстановлен";

exports.NOT_FOUND_EMAIL_MESSAGE =
  "Не существует пользователя с данным email адресом";

exports.NOT_FOUND_USER_MESSAGE = "Такого пользователя не существует";

exports.changeRoleMessage = (role) => {
  return `Пользователя теперь принадлежит роль: ${role}`;
};
