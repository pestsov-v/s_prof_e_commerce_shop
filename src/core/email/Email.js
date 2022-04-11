const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");
const sendgrid = require("nodemailer-sendgrid-transport");

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.first_name;
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
  }

  newTransport() {
    return nodemailer.createTransport(
      sendgrid({
        auth: { api_key: process.env.SENDGRID_API_KEY },
      })
    );
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/templates/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Добро пожаловать в S-Prof");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Сбросить пароль (действие возможно выполнить на протяжении 10 минут)"
    );
  }
}

module.exports = Email;
