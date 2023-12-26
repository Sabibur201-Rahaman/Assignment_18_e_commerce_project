const { saveFeature } = require("../services/FeaturesServices");

exports.CreateFeature = async (req) => {
  let result = await saveFeature(req);
  return res.status(200).json(result);
};
