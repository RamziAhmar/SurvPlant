const predictClassification = require("../services/inferenceService");
const crypto = require("crypto");
const { storeData } = require("../services/storeData");

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;
  const { confidenceScore, label, description, nutrition } = await predictClassification(model, image);

  const id = crypto.randomUUID();
  const isEdible = confidenceScore > 77;
  const result = isEdible ? "Edible" : "Non-edible";
  const createdAt = new Date().toISOString();
  if (!isEdible) {
    const data = {
      id: id,
      result: result,
      confidenceScore: confidenceScore,
      createdAt: createdAt,
    };

    const response = h.response({
      status: "success",
      message: "Model is predicted successfully",
      data: data,
    });
    response.code(201);
    return response;
  }

  const data = {
    id: id,
    label: label,
    result: result,
    confidenceScore: confidenceScore,
    description: description,
    nutrition: nutrition,
    createdAt: createdAt,
  };

  //await storeData(id, data);
  
  const response = h.response({
    status: "success",
    message: "Model is predicted successfully",
    data: data,
  });
  response.code(201);
  return response;
}

module.exports = { postPredictHandler };
