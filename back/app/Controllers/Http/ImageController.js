"use strict";
const Helpers = use("Helpers");
const Product = use("App/Models/Product");
const ProductSize = use("App/Models/ProductSize");
const ProductType = use("App/Models/ProductType");
class ImageController {
  async show({ params, response }) {
    const { type, id } = params;
    switch (type) {
      case "product":
        const product = await Product.find(id);
        return response.download(
          Helpers.tmpPath(`uploads/products/${product.image}`)
        );
      case "productSize":
        const productSize = await ProductSize.find(id);
        return response.download(
          Helpers.tmpPath(`uploads/products/size/${productSize.image}`)
        );
      case "productType":
        const productType = await ProductType.find(id);
        return response.download(
          Helpers.tmpPath(`uploads/products/type/${productType.image}`)
        );
      default:
        return response.status(404).send("Imaage not found");
    }
  }
}

module.exports = ImageController;
