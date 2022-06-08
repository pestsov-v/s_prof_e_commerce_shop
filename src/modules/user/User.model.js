const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const role = require("../../core/enums/role.enum");
const model = require("../../core/enums/model.enum");

const {
  FIRST_NAME_VALIDATE_MESSAGE,
  LAST_NAME_VALIDATE_MESSAGE,
  EMAIL_VALIDATE_MESSAGE,
  PASSWORD_VALIDATE_MESSAGE,
  PASSWORD_SHORT_VALIDATE_MESSAGE,
  PASSWORD_NOT_MATCH_MESSAGE,
} = require("./constants/validate.constants");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, FIRST_NAME_VALIDATE_MESSAGE],
  },
  surname_name: {
    type: String,
  },
  last_name: {
    type: String,
    required: [true, LAST_NAME_VALIDATE_MESSAGE],
  },
  email: {
    type: String,
    required: [true, EMAIL_VALIDATE_MESSAGE],
    unique: true,
    lowercase: true,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  role: {
    type: String,
    enum: [role.user, role.client, role.manager, role.moderator, role.admin],
    default: role.client,
  },
  password: {
    type: String,
    required: [true, PASSWORD_VALIDATE_MESSAGE],
    minlength: [8, PASSWORD_SHORT_VALIDATE_MESSAGE],
    select: false,
    validate: {
      validator: function (el) {
        return el === this.passwordConfirm;
      },
      message: PASSWORD_NOT_MATCH_MESSAGE,
    },
  },
  passwordConfirm: {
    type: String,
    minlength: 8,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: PASSWORD_NOT_MATCH_MESSAGE,
    },
  },
  basket: {
    items: [
      {
        count: {
          type: Number,
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: model.product,
        },
      },
    ],
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.methods.clearBasket = function () {
  this.basket = { items: [] };
  return this.save();
};

const User = mongoose.model(model.user, userSchema);
module.exports = User;
