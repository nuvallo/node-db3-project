const db = require("../data/config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("schemes.id", id)
    .orderBy("steps.step_number");
}

module.exports = {
  find,
  findById,
  findSteps,
};
