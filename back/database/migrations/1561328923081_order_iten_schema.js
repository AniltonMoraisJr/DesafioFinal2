"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderItenSchema extends Schema {
  up() {
    this.create("order_itens", table => {
      table.increments();
      table
        .integer("order_id")
        .references("id")
        .inTable("orders");
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
    this.drop("order_itens");
  }
}

module.exports = OrderItenSchema;
