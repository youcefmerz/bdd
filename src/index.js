const express = require("express")
require("./db/mongoose")
const Person = require("./models/person")
const port = process.env.APP_PORT
const app = express()
app.use(express.json())
// Create a person
let person = new Person({
    name: "firstName lastName",
    age: 20,
    favoriteFoods: ["Banana", "Cheese"]
})
// person
//     .save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => console.error(err))
//create many people
let people = [
    {
        name: "Ali",
        age: 15,
        favoriteFoods: ["Oranges", "Chicken"]
    },
    {
        name: "Ania",
        age: 6,
        favoriteFoods: ["Fish", "Soupe"]
    }
]
//Add the array to database using Person.create
// Person.create(people, (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     Person(data)
// })
// Use Person.find() to search on database, all person
// Person
//     .find()
//     .then(doc => {
//         console.log(`Finding persons: ${doc}`)
//     })
//     .catch(err => console.error(err))
// Use Person.findOne() to return a single matching document
// Person
//     .findOne({ favoriteFoods: ["fish","Soupe"] })
//     .then((doc) => {
//         console.log("In findOne: ")
//         console.log(doc)
//     })
//     .catch((err) => console.error(err))
// // Use model.findById() to Search Your Database By _id
// Person
//     .findById({ _id: '601c2a103b094ccaa9cded4c' })
//     .then((doc) => {
//         console.log("In findById: ")
//         console.log(doc)
//     })
//     .catch((err) => console.error(err))
// // Perform Classic Updates by Running Find, Edit, then Save
// Person
//     .findById({ _id:'601c2a103b094ccaa9cded4c' })
//     .then((doc) => {
//         doc.favoriteFoods.push("hamburger")
//         doc.save();
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));
// // Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({age: 15}, {$set:{name:"Not"}}, {new: true}, (err, doc) => {
//     if (err) {
//         console.log("Something wrong when updating data!")
//     }
//     console.log("In findOne and update")
//     console.log(doc)
// })
// Person.remove({ name: 'try' }, { new: true },(err, doc) => {
//     if (err) {
//         console.log("Something wrong when removing data!")
//     }
//     console.log("In remove")
//     console.log(doc)
// })
// Delete One Document Using model.findByIdAndRemove
// Person
//     .findByIdAndRemove({ _id: '5fef6ff0932e905281c4dead' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));
// MongoDB and Mongoose - 
//Delete Many Documents with model.remove() with name Ania
// Person
//     .remove({ name: 'Ania' })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));
Person.find({favoriteFoods: {"$in": ["Banana"]}}).
        limit(5).
        sort({ name: -1 }).
        select({ name: 1, age: 1 })
        // select('name age favoriteFoods')
        .exec((err, doc) => {
        if (err) {
            console.log("Something wrong when removing data!")
        }
        console.log("In find")
        console.log(doc)
})
app.listen(port, () => {
    console.log(`Server is up on port ${port}` )
})