"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSizeSchema extends Schema {
  up() {
    this.create("product_sizes", table => {
      table.increments();
      table
        .integer("product_id")
        .references("id")
        .inTable("products");
      table.string("name");
      table.decimal("price");
      table.string("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_sizes");
  }
}

module.exports = ProductSizeSchema;
