var CaseCategory  = require('../../models/case/case_category');


exports.getCategories = async function(ctx,next) {
  var caseCategories = await CaseCategory
  								.find({})
  								.populate({
							        path:'cases',
							        select:'name type'
						        })
  								.exec();
  	console.log(caseCategories)
    ctx.body = {caseCategories}
}