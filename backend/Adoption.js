
const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    name: String,
    email: String,
    pet: String,
    phone: String
});

module.exports = mongoose.model("Adoption", adoptionSchema);

