"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  types() {
    return this.hasMany("App/Model/ProductSize");
  }

  sizes() {
    return this.hasMany("App/Model/ProductSize");
  }
}

module.exports = Product;
