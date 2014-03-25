PicoCash.Category = DS.Model.extend({
    name: DS.attr('string'),
    color: DS.attr('string'),
    transactions: DS.hasMany('transaction'),

    style: function() {
        return "color:" + this.get('color');
    }.property('color')
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
        color: "#0099ff"
    }
];