"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductTypeSchema extends Schema {
  up() {
    this.create("product_types", table => {
      table.increments();
      table
        .integer("product_id")
        .references("id")
        .inTable("products");
      table.string("name").notNullable();
      table.decimal("price").notNullable();
      table.string("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_types");
  }
}

module.exports = ProductTypeSchema;
