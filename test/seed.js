const { db } = require('../db');
const { User,Board,Cheese } = require('../models/index');

async function seed () {

    await db.sync({ force: true })

    u1 = await User.create({
        name: "Wallace",
        email: "wallace@antipesto.co.uk"
    });

    b1 = await Board.create({
        type: "English",
        description: "Traditional Yorkshire cheese",
        rating: 4
    });

    b2 = await Board.create({
        type: "Cheddars",
        description: "Sharp cheddar cheese",
        rating: 3
    });

    c1 = await Cheese.create({
        title: "Wensleydale",
        description: "Handcrafted traditional cheese"
    });

    c2 = await Cheese.create({
        title: "Dale End Cheddar",
        description: "Rich with a fantastically sharp bite"
    });

    c3 = await Cheese.create({
        title: "Pitchfork Cheddar",
        description: "Dense, creamy cheddar"
    });

    await b1.addCheese(c1);
    await b1.addCheese(c2);
    await b2.addCheese(c2);
    await b2.addCheese(c3);
    await u1.addBoard(b1);
    await u1.addBoard(b2);

}

module.exports = seed;