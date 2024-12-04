const fs = require("fs");
const csv = require("csv-parser");

async function loadLabelsFromCSV(filePath) {
  return new Promise((resolve, reject) => {
    const labels = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        labels.push({
          name: row.Name,
          description: row.Description,
          nutrition: row.Nutrition,
        });
      })
      .on("end", () => {
        resolve(labels);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = { loadLabelsFromCSV };