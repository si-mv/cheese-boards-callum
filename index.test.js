const {db} = require('./db');
const {User,Board,Cheese} = require('./models/index');

describe('Sequelize Models', () => {
    let u1;
    let b1;
    let c1;
    beforeAll(async () => {
        await db.sync({ force: true });
        u1 = await User.create({
            name: "Wallace",
            email: "wallace@antipesto.co.uk"
        });
        b1 = await Board.create({
            type: "English",
            description: "Traditional Yorkshire cheese",
            rating: 4
        });
        c1 = await Cheese.create({
            title: "Wensleydale",
            description: "Handcrafted traditional cheese"
        });
    });
    test('can create a User', async () => {
        expect(u1.name).toBe("Wallace");
        expect(u1.email).toBe("wallace@antipesto.co.uk");
    });
    test('can create a Board', async () => {
        expect(b1.type).toBe("English");
        expect(b1.description).toBe("Traditional Yorkshire cheese");
        expect(b1.rating).toBe(4);
    });
    test('can create a Cheese', async () => {
        expect(c1.title).toBe("Wensleydale");
        expect(c1.description).toBe("Handcrafted traditional cheese");
    });
});