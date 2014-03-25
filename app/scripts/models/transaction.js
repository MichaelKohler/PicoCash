PicoCash.Transaction = DS.Model.extend({
    name: DS.attr('string'),
    amount: DS.attr('number'),
    createDate: DS.attr('date'),
    category: DS.belongsTo('category')
});

PicoCash.Transaction.FIXTURES = [
    {
        id: 1,
        name: "Lunch",
        amount: 23.00,
        createDate: Date.now(),
        category: 1
    },
    {
        id: 2,
        name: "Dinner",
        amount: 25.00,
        createDate: Date.now(),
        category: 2
    },
    {
        id: 3,
        name: "Computer",
        amount: 2300.00,
        createDate: Date.now(),
        category: 1
    }
];