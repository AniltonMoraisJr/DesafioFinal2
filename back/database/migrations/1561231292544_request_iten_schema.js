"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RequestItenSchema extends Schema {
  up() {
    this.create("request_itens", table => {
      table.increments();
      table
        .integer("request_id")
        .references("id")
        .inTable("requests");
      table
        .integer("product_id")
        .references("id")
        .inTable("products");
      table
        .integer("product_type_id")
        .references("id")
        .inTable("product_types");
      table
        .integer("product_size_id")
        .references("id")
        .inTable("product_sizes");
      table.decimal("price").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("request_itens");
  }
}

module.exports = RequestItenSchema;
