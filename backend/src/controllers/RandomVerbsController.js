const IrregularVerb = require("../models/IrregularVerbsSchema");

module.exports = {
  async index(req, res) {
    const count = await IrregularVerb.count();
    const random = Math.floor(Math.random() * count);
    const verb = await IrregularVerb.findOne().skip(random);
    return res.json(verb);
  }
};
