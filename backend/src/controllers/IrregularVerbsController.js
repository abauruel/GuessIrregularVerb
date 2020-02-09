const IrregularVerb = require("../models/IrregularVerbsSchema");

module.exports = {
  async index(req, res) {
    const response = await IrregularVerb.find().sort("verb");
    return res.json(response);
  },
  async store(req, res) {
    const { verb } = req.body;

    const checkExist = await IrregularVerb.findOne({
      where: {
        verb
      }
    });

    if (checkExist) {
      return res.status(400).json({ error: "Verb already registered" });
    }

    const irregularVerb = await IrregularVerb.create(req.body);
    return res.json(irregularVerb);
  }
};
