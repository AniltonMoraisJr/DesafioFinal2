"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class RequestIten extends Model {
  product() {
    return this.belongsTo("App/Models/Product");
  }
  type() {
    return this.belongsTo("App/Models/ProductType");
  }
  size() {
    return this.belongsTo("App/Models/ProductSize");
  }
}

module.exports = RequestIten;
