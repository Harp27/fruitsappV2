const mongoose  = require("./connection");
const Fruit = require("./fruit");


mongoose.connection.on("open", async () => {
    await Fruit.deleteMany();

    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ];
await Fruit.create(startFruits);

mongoose.connection.close();

});