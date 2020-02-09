const mongoose = require("mongoose");

const IrregularVerbsSchema = new mongoose.Schema(
  {
    verb: String,
    pastSimple: String,
    pastParticiple: String
  },
  {
    timestamps: true
  }
);

module.exports = new mongoose.model("IrregularVerbs", IrregularVerbsSchema);
