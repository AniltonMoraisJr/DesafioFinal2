"use strict";

/*
|--------------------------------------------------------------------------
| UserAdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const User = use("App/Models/User");
const Hash = use("Hash");

class UserAdminSeeder {
  async run() {
    const user = new User();
    user.username = "Admin";
    user.email = "admin@mail.com";
    user.password = "admin";
    user.user_type = "ADMIN";

    await user.save();
  }
}

module.exports = UserAdminSeeder;
