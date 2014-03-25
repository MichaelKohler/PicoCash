PicoCash.Category = DS.Model.extend({
    name:           DS.attr('string'),
    color:          DS.attr('string')
});

PicoCash.Category.FIXTURES = [
    {
        id: 1,
        name: "Food",
        color: "red"
    },
    {
        id: 2,
        name: "Hobby",
        color: "blue"
    },
    {
        id: 3,
        name: "Test",
        color: "yellow"
    }
];