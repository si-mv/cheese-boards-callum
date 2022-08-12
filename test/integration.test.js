const {db} = require('../db');
const {User,Board,Cheese} = require('../models/index');
const seed = require('./seed');

describe('Model Associations', () => {
    jest.setTimeout(60000);
    beforeEach(async () => {
        await db.sync({ force: true });
    });

    test('can load board with its cheeses', async () => {
        let {u1, b1, b2, c1, c2, c3} = await seed();
        await b1.addCheese(c1);
        await b1.addCheese(c2);
        await b2.addCheese(c2);
        await b2.addCheese(c3);
        await u1.addBoard(b1);
        await u1.addBoard(b2);
        let boards = await Board.findAll({include: Cheese});
        console.log(boards);
        expect(u1.email).toBe("wallace@antipesto.co.uk");
    });

});