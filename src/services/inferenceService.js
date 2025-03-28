const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");
const { loadLabelsFromCSV } = require("./loadLabel");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .div(255.0)
      .toFloat();

    const classes = await loadLabelsFromCSV(process.env.LABEL_URL);
    
    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    return { 
      confidenceScore, 
      label: label.name,
      description: label.description,
      nutrition: label.nutrition,   
    };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`);
  }
}

module.exports = predictClassification;
