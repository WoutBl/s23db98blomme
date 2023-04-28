const mongoose = require("mongoose")
const sewerSchema = mongoose.Schema({
    _id: Number,
    Length: { type: Number, set: v => Math.floor(v), default: 10, min: 1, max: 100 },
    Material: String,
    Location: String
})
module.exports = mongoose.model("Sewer",
    sewerSchema)