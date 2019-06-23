"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("description");
      table.decimal("evaluation");
      table.time("spent_time");
      table.string("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
