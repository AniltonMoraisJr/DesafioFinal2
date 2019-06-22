"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RequestsSchema extends Schema {
  up() {
    this.create("requests", table => {
      table.increments();
      table
        .integer("user_id")
        .references("id")
        .inTable("users");
      table.text("notes");
      table.string("zip_code").notNullable();
      table.string("address").notNullable();
      table.string("neighborhood").notNullable();
      table.string("number").notNullable();
      table.decimal("total").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("requests");
  }
}

module.exports = RequestsSchema;
