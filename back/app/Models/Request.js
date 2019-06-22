"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Request extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
  requestItens() {
    return this.hasMany("App/Models/RequestIten");
  }
}

module.exports = Request;
