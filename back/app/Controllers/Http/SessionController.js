"use strict";

class SessionController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();

    const token = await auth.withRefreshToken().attempt(email, password);

    return response.json(token);
  }
}

module.exports = SessionController;
