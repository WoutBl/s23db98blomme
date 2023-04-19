const mongoose = require("mongoose")
const sewerSchema = mongoose.Schema({
_id:Number,
Length: Number,
Material: String,
Location: String
})
module.exports = mongoose.model("Sewer",
sewerSchema)