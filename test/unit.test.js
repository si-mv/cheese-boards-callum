const {db} = require('../db');
const {User, Board, Cheese} = require('../models/index');
const seed = require('./seed');

describe('Sequelize Models', () => {

    beforeAll(async () => {
        await seed()
    })

    test('can create a User', async () => {
        const u1 = await User.findByPk(1)
        expect(u1.name).toBe("Wallace");
        expect(u1.email).toBe("wallace@antipesto.co.uk");
    });

    test('can create a Board', async () => {
        const b1 = await Board.findByPk(1)
        expect(b1.type).toBe("English");
        expect(b1.description).toBe("Traditional Yorkshire cheese");
        expect(b1.rating).toBe(4);
    });
    
    test('can create a Cheese', async () => {
        const c1 = await Cheese.findByPk(1)
        expect(c1.title).toBe("Wensleydale");
        expect(c1.description).toBe("Handcrafted traditional cheese");
    });
});