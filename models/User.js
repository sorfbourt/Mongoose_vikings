// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
//Create a viking schema here
//<======Don't forget Module.export ============>
//<================Schema=====================>

const vikingSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    familyName: {
        type: String, 
        required: true
    }, 
    strength: Number, 
    Weapon: String

})

const VikingModel = model("viking", vikingSchema);
module.exports = VikingModel;

//https://github.com/1travelintexan/Dino-Mongoose