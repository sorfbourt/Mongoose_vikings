//Make sure to require your model so you can connect to the DB

const VikingModel = require("./models/User");


//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:

/////////////////////ADD ONE
// const Ragnar =  {
// firstName:"Ragnar", 
// familyName:"Logbrok", 
// strength: 10, 
// weapon:"Axe"
// }

// VikingModel.create(Ragnar)
// .then((newVikingDB)=>{
//     console.log("You have added a viking to your database: ", newVikingDB)
// })
// .catch((error)=>{
//     console.log("Your viking did not add to your database: ", error)
// })

////////////////////////// DELETE ONE
// VikingModel.findByIdAndDelete('63db9c695431aa8c2a16f0aa')
// .then((deletedViking)=>{
//     console.log('Your viking has sucessfully been deleted: ', deletedViking)
// })
// .catch((err)=>{
//     console.log("Your viking has not been deleted: ", err)
// })

/////////////ADD ARRAY
// const vikingArray =  [{
//     firstName:"Ragnar", 
//     familyName:"Logbrok", 
//     strength: 8, 
//     weapon:"Axe"
//     }, 
//     {
//     firstName:"Kaðlín", 
//     familyName:"axe", 
//     strength: 10, 
//     weapon:"sword"
//     }, 
//     {
//     firstName:"Astrid", 
//     familyName:"Ironspear", 
//     strength: 2, 
//     weapon:"bow"
//     }, 
//     {
//     firstName:"Hilda", 
//     familyName:"Roar", 
//     strength: 5, 
//     weapon:"hammer"
//     }
// ]


// VikingModel.insertMany(vikingArray)
// .then((newVikingDB)=>{
//     console.log("You have added an array of vikings to your database: ", newVikingDB)
// })
// .catch((error)=>{
//     console.log("Your viking ARRAY did not add to your database: ", error)
// })

//updating something in DB
VikingModel.findByIdAndUpdate(
  "63dba0668b90fa538cecfca1",
  { strength: 1000 },
  { new: true }
)
  .then((updatedViking) => {
    console.log("Viking Updated", updatedViking);
  })
  .catch((err) => {
    console.log("There was error updating the Viking", err);
  });