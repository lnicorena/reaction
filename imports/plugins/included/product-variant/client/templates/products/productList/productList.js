import { Template } from "meteor/templating";
import { getPrimaryMediaForItem, ReactionProduct } from "/lib/api";

/**
 * productList helpers
 */

Template.productList.helpers({
  products() {
    return ReactionProduct.getProductsByTag(this.tag);
  },
  media() {
    const variants = ReactionProduct.getTopVariants();
    return getPrimaryMediaForItem({ productId: this._id, variantId: variants && variants[0] && variants[0]._id });
  }
});
