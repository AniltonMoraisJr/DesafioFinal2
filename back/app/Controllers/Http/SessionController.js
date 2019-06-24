"use strict";

const User = use("App/Models/User");

class SessionController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();

    const token = await auth.withRefreshToken().attempt(email, password);

    const user = await User.query()
      .where("email", "=", email)
      .with("orders")
      .fetch();

    return response.json({ ...token, user });
  }
}

module.exports = SessionController;
