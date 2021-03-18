const mongoose = require("mongoose")
const validator = require("validator")

const personSchema = new mongoose.Schema({
  name: {
      type: String,
      required:true
  },
  age: { 
      type: Number,
      default: 0,
      validate(value){
          if(value<0){
              throw new Error("Age can not be less than 0 ")
          }
      } 
  },
  favoriteFoods : {
      type: [String] //array of stings
  }},
  {
      timestamps: true
  }
)

const Person = mongoose.model("Person", personSchema)

module.exports = Person