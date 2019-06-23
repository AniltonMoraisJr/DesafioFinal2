"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProductSize = use("App/Models/ProductSize");

/**
 * Resourceful controller for interacting with productsizes
 */
class ProductSizeController {
  /**
   * Show a list of all productsizes.
   * GET productsizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new productsize.
   * GET productsizes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new productsize.
   * POST productsizes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();
    if (request.file("image")) {
      const upload = request.file("image", { size: "2mb" });

      const fileName = `${Date.now()}.${upload.subtype}`;

      await upload.move(Helpers.tmpPath("uploads/products/size"), {
        name: fileName
      });

      if (!upload.moved()) return upload.error();
      data.image = fileName;
    }
    const productSize = await ProductSize.create(data);

    return productSize;
  }

  /**
   * Display a single productsize.
   * GET productsizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing productsize.
   * GET productsizes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update productsize details.
   * PUT or PATCH productsizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a productsize with id.
   * DELETE productsizes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ProductSizeController;
