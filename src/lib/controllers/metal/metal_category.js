var MetalCategory  = require('../../models/metal/metal_category');


exports.getCategories = async function(ctx,next) {
  var metalCategories = await MetalCategory
  								.find({})
  								.populate({
							        path:'metals',
							        select:'name type'
						        })
  								.exec();

    ctx.body = {metalCategories}
}