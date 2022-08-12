const { db } = require('../db');
const {User, Board, Cheese} = require('../models/index');
const seed = require('./seed');

describe('Model Associations', () => {

    beforeAll(async () => {
        await seed()
    })

    test('can load board with its cheeses', async () => {
        let b1 = await Board.findByPk(1, {include: Cheese});
        expect(b1.Cheeses[0] instanceof Cheese).toBe(true)
    });

});
